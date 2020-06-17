const WebpackRTLPlugin = require('webpack-rtl-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const setupRTL = (config, env) => {
  config.module.rules.forEach(rule => {
    console.dir(rule, { depth: null });
  });
  process.exit(0);
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new WebpackRTLPlugin({
      diffOnly: true
    })
  );
  return config;
};

module.exports = {
  setupRTL
};
