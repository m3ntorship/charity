const { setupPostcss } = require('./config-webpack-postcss');
module.exports = {
  webpack: (config, env) => {
    return setupPostcss(config, env);
  }
};
