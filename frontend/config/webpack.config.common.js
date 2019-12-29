'use strict'

const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {app: path.resolve(__dirname, '../src/index.tsx')},

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {'@': path.resolve(__dirname, '../src')}
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({workers: 1, tslint: true}),
    new Dotenv({ path: path.resolve(__dirname, '../../.env') })
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, '../src'),
        use: [{loader: 'tslint-loader', options: {typeCheck: true, fix: true}}]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        options: { transpileOnly: true, experimentalWatchApi: true }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', {loader: 'css-loader', options: {url: false}}]
      }
    ]
  }
}
