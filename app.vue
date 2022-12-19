<script setup lang="ts">
// Initialize store
await Promise.all([
  await useShop().init(),
  await useLocalization().localize(),
])

// Log Apollo errors to console
useNuxtApp().hook('apollo:error', (error) => {
  console.error(error)
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage>
        <slot />
      </NuxtPage>
    </NuxtLayout>
  </div>
</template>
