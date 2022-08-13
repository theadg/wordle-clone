/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '500px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif'],
    },
    extend: {
      height: {
        'hm': '620px',
        'ht': '440px',
        'hk': '200px',
      },
      width: {
        'wt': '330px',
        'wk': '484px',
        '18': '70px', 
      },
      colors: {
        yellow: 'rgb(181, 159, 59)',
        green: 'rgb(83, 141, 78)',
        gray: 'rgb(129, 131, 132)',
        blackWrong: 'rgb(58,58,60)',
      },

    },
  },
  plugins: [],
}
