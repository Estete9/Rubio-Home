/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/*.{html,js,jsx}', './src/**/*.{html, js,jsx}', './public/index.html'],
  content: ['./src/*.{html,js,jsx}', './src/**/*.{html, js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: ['HelveticaNeue', 'sans-serif'],
      },

      colors: {
        primary: '#d9ad26',
        secondary: '#d1d3d4',
        accent: '#ec1c24',
        neutral: '#231f20',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
