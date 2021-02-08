module.exports = {
  important: true,
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
        body: ['Gotham Book', 'sans-serif'],
        title: ['Butler', 'sans-serif'],
    },
    extend: {
        colors: {
             nav:  {
                100: '#3B6780',
              },
              section: {
                100: '#5E697E',
                200: '#EEE1D9',
                300: '#F6F1ED',
                400: '#37776d',
                500: '#F4F4F4',
                600: '#0E3E01',
              },
        },
        height: {
          header: '20vh',
          section: '15vh',
        },
        width: {
          '1/3': '31.666667%',
        }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
