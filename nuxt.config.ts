// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    storefrontEndpoint: process.env.SHOPIFY_ENDPOINT,
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    'nuxt-icon',
  ],

  apollo: {
    clients: {
      default: './apollo/config.ts',
    },
  },

  vite: {
    build: {
      sourcemap: 'inline',
    },
  },
})
