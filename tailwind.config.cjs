/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#673281",
        'primary-20':"#f2ecf859",
        'primary-50':"#f9e5ff42",
        'primary-100':"#a392a84d",
        'primary-500':"#673281",
        'primary-900':"#442752",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
