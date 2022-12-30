/* eslint-disable no-unused-expressions */
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import autoprefixer from 'autoprefixer';
import dotenv from 'dotenv';
import externals from 'rollup-plugin-node-externals';
import css from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import cache from './rollup-plugin-cache.mjs';

dotenv.config();

const cssPlugins = [];
const production = process.env.NODE_ENV || 'production';

const plugins = [
  externals(),
  nodeResolve({ browser: true, jsnext: 'main' }),
  json(),
  css({ plugins: cssPlugins }),
  image(),
  replace({
    preventAssignment: true,
    'process.browser': true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react',
    ],
  }),
  cache(),
];

if (production === 'production') {
  plugins.push(terser());
  cssPlugins.push(autoprefixer());
}

const config = {
  input: './client/src/index.jsx',
  output: {
    file: './client/public/dist/build.js',
    name: 'build.js',
    format: 'iife',
    sourcemap: 'inline',
  },
  onwarn(warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.warn(warning.message);
  },
  plugins,
};

export default config;
