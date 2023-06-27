/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./*.html"
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#ffffff',
      'secondary': '#ffffff'
    },
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#ffffff',
        'steel-blue': '#849CA5',
        'dusty-pink': '#B88A94',
        'muted-pink': '#A6827E',
        'stormy-blue': '#647D89',
        'raisin-black': '#242124',
        'electric-blue': '#00CCFF',
        'fuchsia': '#FF00FF'
      },
      fontFamily: {
        'roboto-default': ['Roboto Slab', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-matrix': ['Roboto Mono', 'sans-serif']
      },
      spacing: {
        '1.25': '0.313rem',
        '5.5': '1.375rem',
        '6.5': '1.675rem',
        '68': '17rem'
      }
    },
  },
  plugins: [],
}
/*
    textColor: {
      primary: '#ffffff',
      secondary: '#ffffff'
    },
*/
