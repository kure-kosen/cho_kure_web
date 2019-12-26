'use strict'

const path = require('path');

const { DefinePlugin } = require("webpack");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {app: path.resolve(__dirname, '../src/index.tsx')},

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {'@': path.resolve(__dirname, '../src')}
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({workers: 1, tslint: true}),
    new DefinePlugin({ 'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }}),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        use: [{loader: 'tslint-loader', options: {typeCheck: true, fix: true}}]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {transpileOnly: true}
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', {loader: 'css-loader', options: {url: false}}]
      }
    ]
  }
}
