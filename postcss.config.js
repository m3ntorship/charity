const environ = process.env.NODE_ENV;
module.exports = {
  plugins: [
    // ...
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    environ === 'production' || environ === 'ci'
      ? (require('@fullhuman/postcss-purgecss')({
          content: ['./dist/index.html', './dist/typography.html'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
        require('cssnano')({ preset: 'default' }))
      : null
    // ...
  ]
};
