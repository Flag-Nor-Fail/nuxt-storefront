<script setup lang="ts">
const cart = useCart().cart
const cartLines = useCart().lines
</script>

<template>
  <div class="container p-6 mx-auto">
    <h1 class="py-4">Shopping Cart</h1>
    <div
      v-if="cart?.id"
      class="grid grid-cols-12 gap-10"
    >
      <div class="grid col-span-12 gap-6 lg:col-span-8">
        <div
          v-if="cartLines.edges.length"
          class="grid"
        >
          <CartLine
            v-for="line in cartLines.edges.map((edge) => edge.node)"
            :key="line.id"
            :line="line"
          />
        </div>
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <CartSummary />
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>
