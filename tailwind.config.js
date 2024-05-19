/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js,jsx}', './src/**/*.{html, js,jsx}'],
  theme: {
    extend: {
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







