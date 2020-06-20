const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    hot: true
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'converter.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'converter'
  }
};
