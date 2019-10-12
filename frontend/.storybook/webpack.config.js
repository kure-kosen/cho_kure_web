'use strict'

const path = require('path');

module.exports = ({config}) => {
  config.module.rules.push(
      {
        test: /\.(ts|tsx)?$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/,
        options: {transpileOnly: true}
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: require.resolve('react-docgen-typescript-loader'),
        exclude: /node_modules/
      });
  // {
  //   test: /\.stories\.tsx?$/,
  //   loader: require.resolve('@storybook/source-loader'),
  //   options: { injectParameters: true },
  //   enforce: 'pre',
  // }

  config.resolve.extensions.push('.js', '.ts', '.tsx');
  config.resolve.alias = {'@': path.resolve(__dirname, '../src')};

  return config;
};
