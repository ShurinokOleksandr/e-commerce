/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**'
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
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
