<script setup lang="ts">
import type { Collection } from '@/types/shopify'
import CollectionQuery from '@/apollo/queries/collection'

interface CollectionReturn {
  collection: Collection
}

const handle = useRoute().params.handle
const variables = {
  handle,
  first: 10,
}
const {
  result,
  loading,
} = useQuery<CollectionReturn>(CollectionQuery, { ...variables }, {})
</script>

<template>
  <div>
    <template v-if="!loading">
      <template v-if="result?.collection?.id">

        <h1>{{ result.collection.title }}</h1>

        <ul v-if="result.collection.products.edges.length">
          <li
            v-for="product in result.collection.products.edges.map((edge) => edge.node)"
            :key="product.id"
          >
            <NuxtLink :to="`/products/${product.handle}`">
              {{ product.title }}
            </NuxtLink>
          </li>
        </ul>

      </template>
      <NotFound v-else />
    </template>
  </div>
</template>
