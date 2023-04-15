/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#3b3c81",
        'primary-100':"#3b3c81",
        'primary-500':"#3b3c81",
        'primary-900':"#3b3c81",
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
