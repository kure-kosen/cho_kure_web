"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const DEV_SERVER_PORT = 5000;

// definitions is in DefinePlugin
const ENV = common.plugins.find(v => Object.keys(v)[0] === "definitions").definitions;
const isTrueReg = new RegExp(/true/i);
const HOST = isTrueReg.test(ENV["process.env.USE_IP_ADDRESS"]) ? ENV["process.env.IP_ADDRESS"].replace(/"/g, "") : "localhost";

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
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
    },
    stats: {
      children: false, // Hide children information
      maxModules: 0 // Set the maximum number of modules to be shown
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
          publicPath: `http://${HOST}:${DEV_SERVER_PORT}/`
        }
      }]
    }]
  }
});
