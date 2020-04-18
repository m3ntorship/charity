module.exports = {
  plugins: [
    // ...
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./dist/index.html', './dist/typography.html'],
    //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    // })
    // ...
  ]
};
