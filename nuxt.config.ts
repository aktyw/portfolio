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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Open-minded and detail-oriented frontend developer with Javascript, Typescript, Vue, HTML, CSS, SCSS, Tailwind and more',
        },
      ],
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Barlow-SemiBoldItalic.woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'image',
          type: 'image/webp',
          href: 'img/donuts-mobile.webp',
          media: '(max-width: 1024px)',
          crossorigin: 'anonymous',
        },
        {
          rel: 'prefetch',
          as: 'image',
          type: 'image/webp',
          href: 'img/memorize-mobile.webp',
          media: '(max-width: 1024px)',
          crossorigin: 'anonymous',
        },
        {
          rel: 'prefetch',
          as: 'image',
          type: 'image/webp',
          href: 'img/baryt-mobile.webp',
          media: '(max-width: 1024px)',
          crossorigin: 'anonymous',
        },
        {
          rel: 'prefetch',
          as: 'image',
          type: 'image/webp',
          href: 'img/countries-mobile.webp',
          media: '(max-width: 1024px)',
          crossorigin: 'anonymous',
        },
      ],
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
