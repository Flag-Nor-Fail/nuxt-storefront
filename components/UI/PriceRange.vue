<script setup lang="ts">
import type { ProductPriceRange } from '@/types/shopify'
const props = withDefaults(defineProps<{
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  priceRange: ProductPriceRange
  compareAtPriceRange?: ProductPriceRange
}>(), {
  as: 'p',
})

const currencyCode = useLocalization().country.value?.currency?.isoCode || 'USD'
const priceVaries = computed(() => (props.priceRange.minVariantPrice.amount < props.priceRange.maxVariantPrice.amount))
const isOnSale = computed(() => (props.compareAtPriceRange?.minVariantPrice.amount > props.priceRange.minVariantPrice.amount ?? false))
</script>

<template>
  <component :is="as">
    <span>
      {{ useUtils().displayPrice(priceRange.minVariantPrice) }}
    </span>
    <span v-if="priceVaries || isOnSale" :class="[
      isOnSale ? 'line-through' : '',
    ]">
      <template v-if="priceVaries">
        - {{ useUtils().displayPrice(priceRange.maxVariantPrice) }}
      </template>
      <template v-else-if="isOnSale">
        {{ useUtils().displayPrice(compareAtPriceRange?.minVariantPrice) }}
      </template>
    </span>
  </component>
</template>
