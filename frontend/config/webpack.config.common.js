'use strict'

const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.tsx')],
  },

  mode: 'development',
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.json'],
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-dom'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
}
