module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xsm': {'min': '350px', 'max': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        light: 'hsl(200, 100%, 99%)',
        dark: 'hsl(200, 29%, 12%)',
      },
      boxShadow: {
        custom: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
      },
      fontFamily: {
        body: ['Unbounded, cursive'],
        title: ['Unbounded, cursive'],
      },
      textColor: {
        custom: '#204921',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
