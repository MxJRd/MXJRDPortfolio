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
      animation: {
        clickBounce: 'bounce 0.2s',
        'click-pulse': 'pulse 0.25s',
        'slide-from-left': 'slide-from-left 0.75s forwards',
        'slide-from-right': 'slide-from-right 0.75s forwards',
        'slide-to-left': 'slide-to-left 1s forwards',
        'slide-to-right': 'slide-to-right 1s forwards',
        fade: 'fade-out 1s ease-in-out',
        shimmer: 'shimmer 2.5s 4'
      },
      keyframes: {
        'click-bounce': {
          '0%, 100%': {
            transform: 'translateY(-1%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'click-pulse': {
          '0%': {
            transform: 'transform(scale(.9) perspective(1px))'
          },
          '70%': {
            transform: 'transform(scale(1))',
            'box-shadow': '0 0 0 50px rgba(#ffffff, 0)'
          },
          '100%': {
            transform: 'transform(scale(.9))',
            'box-shadow': '0 0 0 0 rgba(#ffffff, 0)'
          }
        },
        'slide-from-left': {
          '0%': {
            transform: 'translateX(100%)'
          }
        },
        'slide-from-right': {
          '0%': {
            transform: 'translateX(-100%)'
          }
        },
        'slide-to-left': {
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        'slide-to-right': {
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-300%)',
          },
          '100%': {
            transform: 'translateY(-2rem)',
          }
        }
      },
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
        '62': '15.5rem',
        '68': '17rem'
      }
    },
  },
  plugins: [],
}
