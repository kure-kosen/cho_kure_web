"use strict";

const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '../../public/assets/build'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.join(__dirname, '../../public/assets/')
    }),
    new ManifestPlugin()
  ]
});
