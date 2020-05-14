const { setupPostcss } = require('../config-webpack-postcss');
module.exports = {
  webpackFinal: config => {
    return setupPostcss(config);
  },
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ]
};
