import fs from 'fs';
import path from 'path';

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const updateCache = (cachePath, cache) => {
  fs.writeFile(cachePath, cache, (e) => {
    if (e) {
      console.error('cache write error', e);
    } else {
      console.log('cache was written');
    }
  });
};

const isJSON = (input) => {
  try {
    const o = JSON.parse(input);
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
  const cPath =
    cachePath || process.env.ROLLUP_CACHE_PATH || './rollup-cache.json';
  return {
    name: 'cache',

    options(o) {
      input = o.input;
      entry = path.join(__dirname, input);
      if (fs.existsSync(cPath)) {
        const read = fs.readFileSync(cPath);
        if (isJSON(read)) {
          const parse = JSON.parse(read);
          parsedCache = parse;
          goodCache = true;
          console.log('cache loaded');
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
          parsedCache.modules[source] &&
          source !== updatedModule
        ) {
          return false;
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

    transform(code, id) {
      if (id === entry && goodCache && parsedCache.modules[id].code === code) {
        console.log('transform');
        return {
          code: parsedCache.modules[id].code,
          ast: parsedCache.modules[id].ast,
          map: { mappings: '' },
        };
      }
      return null;
    },

    buildEnd(e) {
      if (e) {
        console.error('build error', e);
      }
    },

    renderChunk(code, chunk, options) {
      const rollup = ['(function(){'];
      const rollup2 = ['}())'];
      const chunkIds = Object.keys(chunk.modules);
      for (let i = 0; i < chunkIds.length; i += 1) {
        if (
          chunkIds[i] === updatedModule ||
          !Object.keys(parsedCache.modules).includes(chunkIds[i])
        ) {
          parsedCache.modules[chunkIds[i]] = chunk.modules[chunkIds[i]];
        }
      }
      const parsedCacheIds = Object.keys(parsedCache.modules);
      for (let j = 0; j < parsedCacheIds.length; j += 1) {
        rollup.push(parsedCache.modules[parsedCacheIds[j]].code);
      }
      const result = rollup.concat(rollup2).join(' ');
      return { code: result, map: { mappings: '' } };
    },

    closeWatcher() {
      console.log('watcher has been closed');
    },

    closeBundle() {
      stringCache = JSON.stringify(parsedCache);
      updateCache(cPath, stringCache);
    },
  };
};

export default cache;
