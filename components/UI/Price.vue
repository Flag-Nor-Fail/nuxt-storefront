<script setup lang="ts">
import type {
  MoneyV2,
  ProductPriceRange,
} from '@/types/shopify'
const props = withDefaults(defineProps<{
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  price: MoneyV2
  compareAtPrice?: MoneyV2
}>(), {
  as: 'p',
})

const currencyCode = useLocalization().country.value?.currency?.isoCode || 'USD'
const isOnSale = computed(() => (
  props.compareAtPrice?.amount > props.price.amount ?? false
))
</script>

<template>
  <component
    :is="as"
  >
    <span>
      {{ useUtils().displayPrice(price) }}
    </span>
    <span
      v-if="isOnSale"
      :class="[
        isOnSale ? 'line-through' : '',
      ]"
    >
      {{ useUtils().displayPrice(compareAtPrice) }}
    </span>
  </component>
</template>
