'use strict';

const fs = require('fs');
const sucrase = require('sucrase');
const postcss = require('postcss');
const RE_TS = /\.ts$/;
const RE_CSS = /\.css$/;

/**
 * Removing `isServer` will cause dvlp to skip transpiling server files
 */
module.exports = function transpile(filepath, isServer) {
  if (RE_TS.test(filepath)) {
    const transformResult = sucrase.transform(
      fs.readFileSync(filepath, 'utf8'),
      {
        transforms: isServer ? ['imports', 'typescript'] : ['typescript'],
      }
    );
    return transformResult.code;
  } else if (RE_CSS.test(filepath)) {
    return postcss([require('tailwindcss'), require('autoprefixer')])
      .process(`${fs.readFileSync(filepath, 'utf8')}`, { from: filepath })
      .then((r) => r.css);
  }
};
