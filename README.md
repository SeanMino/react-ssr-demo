# React SSR Demo

## Introduction

## quick start
安装
```$xslt
npm install  
```
开发
```$xslt
npm run dev
```
webpack编译server 运行
```$xslt
npm run start
```
直接启动服务端 
```$xslt
npm run server
```

### sass
当使用scss作为样式文件的时候。

webpack的配置
```$xslt
 {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]-[local]-[hash:5]', 'sass-loader']
  },
```
开发的server.dev.js服务端的配置
```$xslt
// Css require hook
require('css-modules-require-hook')({
  extensions: ['.scss'],
  preprocessCss: (data, filename) => {
    if (filename.indexOf(".scss") != -1) {
        return require('node-sass').renderSync({
            data,
            file: filename
        }).css
    }
  },
  camelCase: true,
  generateScopedName: '[name]-[local]-[hash:5]' // 这个要与webpack中的配置一致
});
```

### less

webpack配置
```$xslt
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]-[local]-[hash:5]', 'less-loader']
},
```

server.dev.js

```$xslt
const lessParser = require('postcss-less').parse;
// Css require hook
require('css-modules-require-hook')({
  extensions: ['.less'],
  camelCase: true,
  processorOpts: { parser: lessParser },
  generateScopedName: '[name]-[local]-[hash:5]'
});
```

