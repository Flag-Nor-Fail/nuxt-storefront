<script setup lang="ts">
const headerAccessories = computed(() => ([
  {
    icon: 'ion:search-outline',
    to: '/search',
    label: null,
  },
  {
    icon: 'ion:person-outline',
    to: '/account',
    label: null,
  },
  {
    icon: 'ion:cart-outline',
    to: '/cart',
    label: useCart().linesCount.value,
  },
]))
</script>

<template>
  <div class="flex items-center gap-4">
    <NuxtLink
      v-for="accessory in headerAccessories"
      :key="accessory.icon"
      class="flex items-center gap-2 group"
      :to="accessory.to"
    >
      <Icon
        v-if="accessory.icon"
        :name="accessory.icon"
        class="w-6 h-6 text-gray-500 group-hover:text-primary-background"
      />
      <span  v-if="accessory.label !== null">
        {{ accessory.label }}
      </span>
    </NuxtLink>
  </div>
</template>
