const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: { transpileOnly: true }
  }
    // {
    //   test: /\.stories\.tsx?$/,
    //   loader: require.resolve('@storybook/source-loader'),
    //   options: { injectParameters: true },
    //   enforce: 'pre',
    // }
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
