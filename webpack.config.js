const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ary = ['layout'];
const webpackConfigList = [];

// antd 那边看过来的
ary.forEach(pkg => {
  const entry = {};
  entry[`${pkg}`] = `./packages/${pkg}/src/index.tsx`;

  const config = {
    entry,
    output: {
      filename: '[name].js',
      library: `Pro${pkg.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`,
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'packages', pkg, 'dist')
    },
    plugin: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
    ]
  }

  webpackConfigList.push(config)
})

module.exports = webpackConfigList;