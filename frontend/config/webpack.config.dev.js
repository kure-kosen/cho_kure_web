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

    contentBase: path.resolve(path.join(__dirname, '../')),

    watchContentBase: true,
    historyApiFallback: true,
    noInfo: true,
    historyApiFallback: true,
    overlay: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '/',
              publicPath: 'http://localhost:5000/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader?mimetype=application/font-woff',
            options: {
              name: "[path][name].[ext]",
              outputPath: "/",
              mimetype: 'application/font-woff',
              publicPath: "http://localhost:5000/"
            }
          }
        ]
      }
    ]
  }
});
