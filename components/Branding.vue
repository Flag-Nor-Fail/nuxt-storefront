<script setup lang="ts">
const shop = useShop().shop.value
</script>

<template>
  <header>
    <NuxtLink to="/">
      <div
        v-if="shop?.brand?.logo?.id || shop?.brand?.squareLogo?.id"
        class=""
      >
        <img
          :src="shop.brand.logo?.image?.url || shop.brand.squareLogo?.image?.url"
          class="block h-8"
        />
      </div>
      <span
        v-else
        class="text-lg font-semibold"
      >
        {{ useShop().shop.value?.name }}
      </span>
    </NuxtLink>
  </header>
</template>
