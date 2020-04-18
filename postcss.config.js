module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer')
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./dist/index.html', './dist/typography.html'],
    //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    // })
    // ...
  ]
};
