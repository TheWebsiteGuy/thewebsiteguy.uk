/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/**/*.htm',
    '../../node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
  ],
}