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
      serif: ['Cormorant Garamond', 'Cormorant', 'Georgia'],
    },
    extend: {
      colors: {
        base: '#F6F3EC',
        'base-content': '#3A3A3A',
        primary: '#3A7C4C',
      },
      textColor: {
        p: 'base-content',
        h1: 'base-content',
        h2: 'base-content',
      },
    },
  },
  plugins: [],
};
