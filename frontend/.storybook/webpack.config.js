module.exports = ({config}) => {
  config.module.rules.push(
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {loader: require.resolve('ts-loader')},
          {loader: require.resolve('react-docgen-typescript-loader')}
        ],
        exclude: /node_modules/,
        options: {transpileOnly: true}
      }  // {
         //   test: /\.stories\.tsx?$/,
         //   loader: require.resolve('@storybook/source-loader'),
         //   options: { injectParameters: true },
         //   enforce: 'pre',
         // }
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
