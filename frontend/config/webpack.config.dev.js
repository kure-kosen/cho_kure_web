"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const DEV_SERVER_PORT = 5000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  cache: true,

  devServer: {
    host: '0.0.0.0',
    port: DEV_SERVER_PORT,
    disableHostCheck: true,
    contentBase: path.resolve(path.join(__dirname, '../')),
    watchContentBase: true,
    noInfo: true,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    }
  },

  module: {
    rules: [{
      test: /\.(jpg|png|gif|eot|ttf|svg|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: '/',
          publicPath: `http://localhost:${DEV_SERVER_PORT}/`
        }
      }]
    }]
  }
});
