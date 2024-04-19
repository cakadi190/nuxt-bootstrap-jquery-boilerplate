// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['nuxt-icon'],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  vite: {
    build: {
      cssCodeSplit: false,
    },
  }
});
