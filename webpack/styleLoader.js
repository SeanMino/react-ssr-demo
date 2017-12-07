/**
 * Created by wangxin on 2017/5/4.
 */

var autoprefixer = require('autoprefixer');
var loaderConfig = {
  "css": {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      minimize: true,
    },
  },
  "css-module": {
    loader: 'css-loader',
    options: {
      minimize: true,
      modules: true,
      camelCase: true,
      localIdentName: '[name]-[local]-[hash:5]'
    },
  },
  "postcss": {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      plugins: () => [
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
        }),
      ],
    },
  },
  "less": {
    loader: 'less-loader',
  }
};


var getStyleLoader = function (Array) {
  let use = Array.reduce(function (pre, item) {
    pre.push(loaderConfig[item]);
    return pre
  }, []);

  return {
    fallback: 'style-loader',
    publicPath: '/', //也可改成绝对地址,与output.publicPath一致
    use: use,
  }
};

module.exports = getStyleLoader;