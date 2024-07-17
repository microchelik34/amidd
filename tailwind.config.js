/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens:{
      xl:{max:'1280px'},
      lg:{max:'1024px'},
      md:{max:'829.99px'},
      sm:{max:'610.99px'},
    },
    extend: {
      fontFamily:{
        Roboto:['Roboto', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
        OpenSans:['Open Sans', 'sans-serif']
      },
      colors: {
        standardColor: '#0b041b',
        standardLightColor: '#464646',
        standardLighterColor: 'rgba(18, 79, 72, 0.37)',
        standardDarkColor: '#021d1a',
        OrangeColor: '#ff6107',
        OrangeSecondColor: '#ff823b',
        DarkGreenColor: '#124f48',
        HeroColor: '#E9FBF9',
        BorderColor: '#f2faf9',
      },
      letterSpacing: {
        wide: '.05em',
        widest: '.1em',
      },
      dropShadow: {
        '3xl': '0 0 24px 24px #d6e2e1',
      },

      boxShadow: {
        '3xl' : '0 3px 84px 0 rgba(142, 199, 192, 0.3)',
      },
    },
  },
  plugins: [],
}

