import fs from 'fs';
import path from 'path';
// import { rollup } from 'rollup';

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const updateCache = (c, p) => {
  fs.writeFile(p, c, (e) => {
    if (e) {
      console.error('cache write error', e);
    } else {
      console.log('cache was written');
    }
  });
};

const isJ = (j) => {
  try {
    const o = JSON.parse(j);
    if (o && typeof o === 'object') {
      return true;
    }
  } catch (e) {
    return false;
  }

  return false;
};

const cache = (cachePath) => {
  let parsedCache = { modules: [{ id: undefined }], plugins: {} };
  let stringCache = '';
  let goodCache = false;
  let input = '';
  let output = '';
  const cPath =
    cachePath || process.env.ROLLUP_CACHE_PATH || './rollup-cache.json';
  return {
    name: 'cache',
    // options(o) {
    //   for (let i = 0; i < o.plugins.length; i += 1) {
    //     if (o.plugins[i].name === 'cache') {
    //       o.plugins.splice(i, 1);
    //       break;
    //     }
    //   }
    //   const bundle = () => rollup(o);
    //   bundle().then((bundled) => {
    //     o.cache = bundled.cache;
    //     console.log(o.cache);
    //     return o;
    //   });
    // },
    // };

    options(o) {
      o.cache = { modules: [] };
      input = o.input;
      const split = o.output[0].file.split('/');
      output = split[split.length - 1];
      if (fs.existsSync(cPath)) {
        const read = fs.readFileSync(cPath);
        if (isJ(read)) {
          const parse = JSON.parse(read);
          parsedCache = parse;
          stringCache = JSON.stringify(parse);
          o.cache = parse;
          goodCache = true;
          console.log('cache loaded');
        }
      } else {
        goodCache = false;
        console.log('cache not found');
      }
      return o;
    },

    resolveId(source) {
      if (
        input.length > 0 &&
        source !== path.join(__dirname, input) &&
        stringCache.includes(source)
      ) {
        return false;
      }
      return null;
    },

    transform(code, id) {
      if (goodCache) {
        const stringId = JSON.stringify(id);
        if (stringCache.includes(stringId)) {
          for (let i = 0; i < parsedCache.modules.length; i += 1) {
            if (
              code &&
              parsedCache.modules[i].code &&
              id === parsedCache.modules[i].id
            ) {
              if (code !== parsedCache.modules[i].code) {
                parsedCache.modules[i] = moduleInfo;
                console.log('cache module overwritten');
                break;
              } else {
                console.log('cache module already exists');
                break;
              }
            }
          }
        } else {
          parsedCache.modules.push(moduleInfo);
          console.log('cache module pushed');
        }
      } else {
        parsedCache.modules.push(moduleInfo);
        console.log('cache module pushed');
      }
    },

    // moduleParsed(moduleInfo) {
    //   if (goodCache) {
    //     const stringId = JSON.stringify(moduleInfo.id);
    //     if (stringCache.includes(stringId)) {
    //       for (let i = 0; i < parsedCache.modules.length; i += 1) {
    //         if (
    //           moduleInfo.code &&
    //           parsedCache.modules[i].code &&
    //           moduleInfo.id === parsedCache.modules[i].id
    //         ) {
    //           if (moduleInfo.code !== parsedCache.modules[i].code) {
    //             parsedCache.modules[i] = moduleInfo;
    //             console.log('cache module overwritten');
    //             break;
    //           } else {
    //             console.log('cache module already exists');
    //             break;
    //           }
    //         }
    //       }
    //     } else {
    //       parsedCache.modules.push(moduleInfo);
    //       console.log('cache module pushed');
    //     }
    //   } else {
    //     parsedCache.modules.push(moduleInfo);
    //     console.log('cache module pushed');
    //   }
    // },

    generateBundle(options, bundle, isWrite) {
      // console.log(bundle[output]);
    },

    closeBundle() {
      if (!goodCache) {
        stringCache = JSON.stringify(parsedCache);
      }
      updateCache(stringCache, cPath);
    },
  };
};

export default cache;
