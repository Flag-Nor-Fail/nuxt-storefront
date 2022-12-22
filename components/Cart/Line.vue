<script setup lang="ts">
import type { CartLine } from '@/types/shopify'

const props = defineProps<{
  line: CartLine
}>()

const loading = ref(false)
const image = props.line.merchandise.image || props.line.merchandise.product.featuredImage

const stagedQuantity = ref(props.line.quantity)
const changeQuantity = async (quantity: number) => {
  loading.value = true
  await useCart().update([{
    id: props.line.id,
    quantity,
  }]).finally(() => {
    loading.value = false
  })
}
watch(stagedQuantity, (changedQuantity, oldQuantity) => {
  if (changedQuantity !== oldQuantity)
    changeQuantity(changedQuantity)
})

const loadingRemove = ref(false)
const removeLine = async () => {
  loadingRemove.value = true
  await useCart().remove([props.line.id]).finally(() => {
    loadingRemove.value = false
  })
}
</script>

<template>
  <div class="flex gap-4 py-3 border-t border-gray-200">
    <!-- Line Image -->
    <div
      v-if="image?.id"
      class="w-[150px] shrink-0 h-auto border rounded-lg border-gray-200 overflow-hidden"
    >
      <img
        :src="image.url"
        :alt="image.altText || ''"
        class="object-cover w-full h-full"
      >
    </div>

    <!-- Line Details -->
    <div class="flex flex-col justify-between flex-1">
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-2">
          <NuxtLink :to="`/products/${line.merchandise.product.handle}`">
            <h4>{{ line.merchandise.product.title }}</h4>
          </NuxtLink>
          <div class="flex gap-2">
            <p
              v-for="option in line.merchandise.selectedOptions"
              :key="option.name"
              class="text-sm text-gray-500"
            >
              {{ option.name }}: {{ option.value }}
            </p>
          </div>
        </div>
        <div>
          <UIPrice :price="line.cost.subtotalAmount" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <Icon
            :name="line.merchandise.product.availableForSale
              ? 'ion:checkmark'
              : line.merchandise.quantityAvailable === 0
                ? 'ion:alert'
                : 'ion:close'"
            :class="line.merchandise.product.availableForSale
              ? 'text-green-500'
              : line.merchandise.quantityAvailable === 0
                ? 'text-yellow-500'
                : 'text-red-500'"
          />
          <span class="text-sm">{{
            line.merchandise.product.availableForSale
              ? 'In stock'
              : line.merchandise.quantityAvailable === 0
                ? 'Out of stock'
                : 'Unavailable'
          }}</span>
        </div>
        <!-- Line Actions -->
        <div class="flex items-center gap-2">
          <Icon
            v-if="loading"
            name="ion:load-c"
            class="w-5 h-5 text-gray-500 animate-spin"
          />
          <select
            v-if="line.merchandise.quantityAvailable > 1"
            v-model="stagedQuantity"
          >
            <option
              v-for="quantity in Array.from({ length: Math.min(line.merchandise.quantityAvailable, 10) }, (_, i) => i + 1)"
              :key="quantity"
              :value="quantity"
            >
              {{ quantity }}
            </option>
          </select>
          <UIButton
            color="gray"
            outline
            icon="ion:trash"
            size="sm"
            @click="removeLine"
            :loading="loadingRemove"
            :disabled="loading"
          >
            Remove
          </UIButton>
        </div>
      </div>
    </div>

  </div>
</template>
