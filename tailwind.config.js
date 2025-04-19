/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./*/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '981px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container:{
      screens: {
        sm: '100%',
        md: '100%',
        lg: '981px',
        xl: '1280px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}

