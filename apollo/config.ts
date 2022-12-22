import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
  httpEndpoint: process.env.SHOPIFY_ENDPOINT || '',
  httpLinkOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      'Accept-Language': 'en-US',
      'Content-Type': 'application/json',
    },
  },
  connectToDevTools: true,
})
