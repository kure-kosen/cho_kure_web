const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: { transpileOnly: true }
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
