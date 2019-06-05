"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const DEV_SERVER_PORT = 5000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    host: '0.0.0.0',
    port: DEV_SERVER_PORT,
    disableHostCheck: true,
    contentBase: path.resolve(path.join(__dirname, '../')),
    watchContentBase: true,
    noInfo: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|eot|ttf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: '/',
            publicPath: `http://localhost:${DEV_SERVER_PORT}/`
          }
        }]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: '/',
            mimetype: 'application/font-woff',
            publicPath: `http://localhost:${DEV_SERVER_PORT}/`
          }
        }]
      }
    ]
  }
});
