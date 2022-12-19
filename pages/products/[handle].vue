<script setup lang="ts">
import type { Product } from '@/types/shopify'
import ProductQuery from '@/apollo/queries/product'

interface ProductReturn {
  product: Product
}
const {
  result,
  loading,
} = useQuery<ProductReturn>(ProductQuery, { handle: useRoute().params.handle }, {})
</script>

<template>
  <div>
    <template v-if="!loading">
      <template v-if="result?.product?.id">

        <h1>{{ result.product.title }}</h1>

        <div v-html="result.product.descriptionHtml"></div>

      </template>
      <NotFound v-else />
    </template>
  </div>
</template>
