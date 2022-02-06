/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssTypography = require('@tailwindcss/typography');

function customContainerWidth({ addComponents }) {
  addComponents({
    '.container': {
      maxWidth: '100%',
      '@screen sm': {
        maxWidth: '600px',
      },
      '@screen md': {
        maxWidth: '800px',
      },
      '@screen lg': {
        maxWidth: '1000px',
      },
      '@screen xl': {
        maxWidth: '1240px',
      },
    },
  });
}

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
        openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        md: ['0.9375rem', { lineHeight: '1.6rem', letterSpacing: '0.0625rem' }],
      },
      typography: {
        DEFAULT: {
          img: {
            width: '100%',
          },
        },
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
  plugins: [tailwindcssTypography, customContainerWidth],
};
