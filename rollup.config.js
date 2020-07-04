import * as fs from 'fs';
import * as path from 'path';

import babel from 'rollup-plugin-babel';

import postcss from 'postcss';
import commonjs from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';

import resolve from 'rollup-plugin-node-resolve';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

fs.existsSync('build/') || fs.mkdirSync('build/');

const extensions = ['.js', '.ts'];

const babelPresetESM = [
  [
    '@babel/preset-env',
    {
      targets: { esmodules: true },
    },
  ],
  '@babel/typescript',
];

const babelPresetNonESM = [
  [
    '@babel/preset-env',
    {
      targets: { esmodules: false },
    },
  ],
  '@babel/typescript',
];

const plugins = (presets) => {
  return [
    typescript(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      include: ['src/**/*'],
      presets,
      extensions,
    }),
    resolve({
      mainFields: ['browser', 'module', 'main'],
      extensions,
      preferBuiltins: true,
    }),
    commonjs(),
    terser({
      compress: true,
      mangle: false,
    }),
  ];
};

const clientBuilds = [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        extend: false,
        file: 'build/index.esm.js',
        sourcemap: false,
      },
    ],
    plugins: plugins(babelPresetESM),
  },
];
export default clientBuilds;

buildCss('./src/index.css', './build/index.min.css');
function buildCss(input, output) {
  const inFile = path.normalize(input);
  const outFile = path.normalize(output);

  postcss([
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: 'default',
    }),
  ])
    .process(`${fs.readFileSync(inFile, 'utf8')}`, { from: inFile })
    .then((r) => r.css)
    .then((css) => fs.writeFileSync(outFile, css));
}
