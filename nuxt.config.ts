// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    /* Options */
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  app: {
    head: {
      title: 'Spotify Release'
    }
  }
})
