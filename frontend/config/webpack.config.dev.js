"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    host: '0.0.0.0',
    port: 5000,

    disableHostCheck: true,

    contentBase: path.resolve(__dirname, '../'),

    publicPath: 'http://localhost:5000/',

    watchContentBase: true,
    historyApiFallback: true,
    noInfo: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  }
});
