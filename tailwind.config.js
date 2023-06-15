/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  css: ['~/assets/main.css'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Lato', 'Arial'],
      serif: ['Barlow', 'Lato'],
    },
    extend: {
      colors: {
        'base-100': '#111110',
        'base-200': '#f3d98b',
        'base-content': '#f3d98b',
        primary: '#C05749',
        secondary: '#F1CB5D',
        accent: '#36EB67',
      },
      textColor: {
        p: 'base-content',
        span: 'base-content',
        h1: 'base-content',
        h2: 'base-content',
      },
    },
  },
  plugins: [],
};
