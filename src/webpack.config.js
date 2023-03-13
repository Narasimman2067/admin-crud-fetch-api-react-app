const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.txt$/, 
    use: 'raw-loader' }],
  },
};
module.exports = {
  module: {
    rules: [
      { test: /\.txt$/,
       use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};