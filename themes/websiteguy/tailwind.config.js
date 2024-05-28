/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/**/*.htm',
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