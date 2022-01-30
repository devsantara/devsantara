const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      primary: '#4267C5',
      secondary: '#F0F3FA',
      black: '#1F1F1F',
      gray: {
        light: '#D9D9D9',
        base: '#B4B4B4',
        dark: '#626262',
      },
    },
  },
  plugins: [],
};
