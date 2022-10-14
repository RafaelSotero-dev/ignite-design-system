/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: {
        '1000': '#000',
        '900': '#121214',
        '600': '#171717',
      },
      white: '#fff',


      grey: {
        '800': '#7B7B7B',
        '100': '#EAEAEA',
      },

      cyan: {
        '500': '#61DAFB',
        '400': '#86E5FF',
      }

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif' 
      }
    },
  },
  plugins: [],
}
