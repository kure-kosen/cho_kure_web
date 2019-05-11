'use strict'

const path = require('path');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.tsx')],
  },

  mode: 'development',
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.json'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      memoryLimit: 4096,
      measureCompilationTime: true,
      async: false,
      useTypescriptIncrementalApi: true,
    })
  ],

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "tslint-loader",
            options: {
              typeCheck: true,
              exclude: /node_modules/,
              fix: true
            }
          }
        ]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { transpileOnly: true }
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { url: false } }
        ]
      }
    ],
  }
}
