/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif'],
    },
    extend: {
      height: {
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
