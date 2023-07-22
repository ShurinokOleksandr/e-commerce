/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#a5a8b2',
        'light-primary': '#efefef',
        'dark-primary':'#444a5f',
        'secondary':'#2fbff9',
        'light-secondary':'#ebffff',
        'dark-secondary':'#233a95',
        'third':'#ea2b0f',
        'hover-third':'#ffa89c',
        'light-third':'#ffd2cb',
        'stock':"#12bd5f",
        'hot-price':'#d71f4d'
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
