const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      colors: {
        base: "#0f0f0f",
        primary: "#ff4800",
        yellow: colors.amber,
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c'
      },
      },
      animation: {
        pulse: "pulse 4s infinite"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
