const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  webpack: function (config, env) {
    require('react-app-rewire-postcss')(config, {
      plugins: loader => [
        require('postcss-import'),
        require('postcss-extend'),
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
          content: [
            './public/**/*.html',
            './src/**/*.html',
            './src/**/*.jsx',
            './src/**/*.js'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ]
    });
    return config;
  }
};
