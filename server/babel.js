const lessParser = require('postcss-less').parse;
require('babel-polyfill');
require('source-map-support').install();
const babelRegister = require('babel-register');
babelRegister({
  presets: ['es2015', 'react', 'stage-0'],
  plugins: ['add-module-exports']
});

const cssHook = require('css-modules-require-hook');
cssHook({
  extensions: ['.less'],
  camelCase: true,
  processorOpts: { parser: lessParser },
  generateScopedName: '[name]-[local]-[hash:5]'
});
const assetHook = require('asset-require-hook');
assetHook({
  name: '/[hash].[ext]',
  extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'tif', 'tiff', 'webp'],
  limit: 8000
});