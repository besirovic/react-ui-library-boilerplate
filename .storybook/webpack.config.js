const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (storybookBaseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  config.module.rules.push({
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader',
    exclude: '/node_modules/',
    include: path.resolve(__dirname, '../src'),
  });
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
