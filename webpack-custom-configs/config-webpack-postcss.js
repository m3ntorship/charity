const purgecss = require('@fullhuman/postcss-purgecss');

const setupPostcss = (config, env) => {
  const isProductionMode = env === 'ci' || env === 'production';
  require('react-app-rewire-postcss')(config, {
    plugins: () => {
      let plugins = [
        require('postcss-import'),
        require('postcss-extend'),
        require('tailwindcss'),
        require('autoprefixer')
      ];

      if (isProductionMode) {
        plugins.push(
          purgecss({
            content: [
              './public/**/*.html',
              './src/**/*.html',
              './src/**/*.jsx',
              './src/**/*.js'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        );
      }
      return plugins;
    }
  });
  return config;
};

module.exports = {
  setupPostcss
};
