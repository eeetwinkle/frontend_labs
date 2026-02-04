export default defineNuxtConfig({
  modules: [
    'vue-yandex-maps/nuxt',
  ],
  yandexMaps: {
    apikey: process.env.YANDEX_MAPS_API_KEY,
  },
  compatibilityDate: '2026-01-31',
  devtools: { enabled: true }
})