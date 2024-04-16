// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: {
    enabled: false,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  modules: [
    ['@nuxt/ui', {}],
  ],
  app: {
    head: {
      title: 'CodeToImage',
    },
  },
})
