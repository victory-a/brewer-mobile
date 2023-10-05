/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C67C4E',
        secondary: '#2F2D2C',
        'light-gray': '#808080',
        'mid-gray': '#303336',
        'dark-grey': '#A9A9A9',
        'dark-lemon-green': '#2F4B4E',
        'sea-shell': '#FFFCFB',
        'white-color': '#ddd'
      },
      fontFamily: {
        'Sora-regular': ['Sora-Regular', 'sans']
      }
    }
  },
  plugins: []
};
