module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        Reactbgblue: {
          light: '#61DAFB',
          DEFAULT: '#20232A',
        },
        Bootstrap: {
          light: '#FFFFFF',
          DEFAULT: '#7952B3',
        },
        
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
