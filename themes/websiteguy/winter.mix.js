const mix = require('laravel-mix');
mix.setPublicPath(__dirname);

// Render Tailwind style (input, output)
mix.postCss(
  'assets/styles/base.css',
 'assets/styles/theme.css', [
  require('postcss-import'),
  require('tailwindcss'),
]);

mix.js([
  'assets/js/src/scripts.js',           
  '../../node_modules/preline/dist/preline.js',         
], 'assets/js/dist/app.js');    

mix.browserSync({
  proxy: 'https://dev.thewebsiteguy.uk',
  port: 8080,
  open: false,
  notify: false,
  files: [
    '**/**/*.htm',
  ],
});
