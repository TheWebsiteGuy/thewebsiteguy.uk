const mix = require('laravel-mix');
mix.setPublicPath(__dirname);

// Render Tailwind style (input, output)
mix.postCss(
  'assets/styles/base.css',
 'assets/styles/theme.css', [
  require('postcss-import'),
  require('tailwindcss'),
]);

// Combine JavaScript files
// mix.js('../../node_modules/preline/dist/preline.js', 'assets/js/app.js');  

mix.browserSync({
  proxy: 'https://dev.thewebsiteguy.uk',
  open: false,
  notify: false,
  files: [
    '**/**/*.htm',
  ],
});
