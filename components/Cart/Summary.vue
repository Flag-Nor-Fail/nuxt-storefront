<script setup lang="ts">
const summaryLines = computed(() => ([
  {
    label: 'Tax',
    value: useCart().tax,
  },
  {
    label: 'Subtotal',
    value: useCart().subtotal,
  },
]))
</script>

<template>
  <div class="grid gap-5 p-6 bg-gray-100 rounded-lg">
    <h4>Summary</h4>

    <div>
      <template
        v-for="line in summaryLines"
        :key="line.label"
      >
        <div
          v-if="line.value.value"
          class="flex justify-between py-2 text-sm border-b border-gray-200"
        >
          <p class="text-gray-500">{{ line.label }}</p>
          <p>
            <UIPrice :price="line.value.value" />
          </p>
        </div>
      </template>
    </div>

    <div class="flex items-center justify-between">
      <h5>Order Total</h5>
      <h5>
        <UIPrice :price="useCart().total.value" />
      </h5>
    </div>

    <UIButton
      color="primary"
      stretch
      :disabled="!useCart().checkoutUrl?.value"
      :to="useCart().checkoutUrl?.value"
    >
      Checkout
    </UIButton>
  </div>
</template>
