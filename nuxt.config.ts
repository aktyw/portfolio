/* eslint-disable prettier/prettier */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Arek Tywonek - Frontend Developer',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
  devtools: { enabled: true },
  alias: {
    '@': resolve('__dirname.', '/'),
  },
  css: ['~/assets/main.css'],
  modules: ['@vueuse/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
