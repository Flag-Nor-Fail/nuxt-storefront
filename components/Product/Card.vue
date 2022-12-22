<script setup lang="ts">
import type {
  Product,
} from '@/types/shopify'

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <article
    class="group"
  >
    <NuxtLink
      :to="`/products/${product.handle}`"
    >
      <img
        v-if="product.featuredImage?.id"
        :src="product.featuredImage?.url"
        class="object-cover w-full"
      />
      <div class="pt-3 group-hover:underline">
        <h6>{{ product.title }}</h6>
        <UIPriceRange
          :price-range="product.priceRange"
          :compare-at-price-range="product.compareAtPriceRange"
        />
      </div>
    </NuxtLink>
  </article>
</template>
