import fs from 'fs';
import path from 'path';

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
  let parsedCache = { modules: {} };
  let stringCache = '';
  let goodCache = false;
  const newModules = [];
  let updatedModule = '';
  let input = '';
  let entry = '';
  let output = '';
  const cPath =
    cachePath || process.env.ROLLUP_CACHE_PATH || './rollup-cache.json';
  return {
    name: 'cache',

    options(o) {
      o.cache = { modules: [], plugins: {} };
      input = o.input;
      entry = path.join(__dirname, input);
      const split = o.output[0].file.split('/');
      output = split[split.length - 1];
      if (fs.existsSync(cPath)) {
        const read = fs.readFileSync(cPath);
        if (isJ(read)) {
          const parse = JSON.parse(read);
          parsedCache = parse;
          goodCache = true;
          console.log('cache loaded');
          // o.cache = parse;
        } else {
          console.log('cache is corrupt');
        }
      } else {
        goodCache = false;
        console.log('cache not found');
      }
      return o;
    },

    watchChange(id, change) {
      if (change.event === 'update' && id !== entry) {
        console.log('module update detected');
        updatedModule = id;
        this.resolve(id);
      }
    },

    resolveId(source) {
      if (source === updatedModule) {
        // this.addWatchFile(source);
        return source;
      }
      if (goodCache) {
        if (
          input.length > 0 &&
          source !== entry &&
          parsedCache.modules[source]
        ) {
          // return false;
          return null;
        }
        if (source === entry) {
          return null;
        }
        newModules.push(source);
        this.addWatchFile(source);
        return null;
      }
      this.addWatchFile(source);
      return null;
    },

    load(id) {
      if (parsedCache.modules[id] && id !== updatedModule) {
        console.log('load');
        return {
          code: parsedCache.modules[id].code,
          ast: parsedCache.modules[id].ast,
        };
      }
      return null;
    },

    // transform(id) {
    //   if (parsedCache.modules[id] && id !== updatedModule) {
    //     console.log('transform');
    //     return {
    //       code: parsedCache.modules[id].code,
    //       ast: parsedCache.modules[id].ast,
    //     };
    //   }
    //   return null;
    // },

    moduleParsed(modInfo) {
      console.log('whats after load');
      if (modInfo.id === updatedModule || !parsedCache.modules[modInfo.id]) {
        if (!parsedCache.modules[modInfo.id]) {
          parsedCache.modules[modInfo.id] = { ast: {}, code: '' };
        }
        parsedCache.modules[modInfo.id].ast = modInfo.ast;
        parsedCache.modules[modInfo.id].code = modInfo.code;
      } else {
        console.log('its external now');
        modInfo.isExternal = true;
      }
    },

    resolveDynamicImport(specifier, importer) {
      console.log('dynamo');
    },

    buildEnd(e) {
      if (e) {
        console.error('build error', e);
      }
    },

    // generateBundle(options, bundle, isWrite) {
    //   // console.log(typeof bundle[output].code, bundle[output].code);
    //   if (goodCache) {
    //     // add any new modules to parsedCache
    //     for (let i = 0; i < newModules.length; i += 1) {
    //       parsedCache.modules.push(newModules[i]);
    //     }
    //     // set bundle[output] to parsedCache data
    //     bundle[output].modules = parsedCache.modules;
    //     bundle[output].code = parsedCache.code;
    //   } else {
    //     parsedCache.modules = bundle[output].modules;
    //     parsedCache.code = bundle[output].code;
    //   }
    // },

    closeWatcher() {
      console.log('watcher has been closed');
    },

    closeBundle() {
      stringCache = JSON.stringify(parsedCache);
      updateCache(stringCache, cPath);
    },
  };
};

export default cache;
