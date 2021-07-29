/* eslint-disable no-unused-expressions */
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import externals from 'rollup-plugin-node-externals';
import css from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer';

dotenv.config();

const plugins = [
  externals(),
  json(),
  nodeResolve({ browser: true, jsnext: 'main' }),
  replace({
    preventAssignment: true,
    'process.browser': true,
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  image(),
  css({ extensions: ['.css'], plugins: [autoprefixer()] }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
  }),
  commonjs(),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser());
}

export default {
  input: 'client/src/index.js',
  output: {
    file: 'client/public/dist/build.js',
    name: 'mainBuild',
    format: 'iife',
    sourcemap: true,
  },
  onwarn: function (warning) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    console.warn(warning.message);
  },
  plugins,
};
