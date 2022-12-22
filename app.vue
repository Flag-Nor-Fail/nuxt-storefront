<script setup lang="ts">
// Initialize store
await Promise.all([
  await useShop().init(),
  await useLocalization().localize(),
  await useCart().retrieveCart(),
])

// Log Apollo errors to console
useNuxtApp().hook('apollo:error', (error) => {
  console.error(error)
})

const isShopValid = computed(() => !!useShop().shop.value?.id || false)

const colors = computed(() => ({
  primaryBg: useUtils().hexToStrippedRgb(useShop().shop.value?.brand?.colors.primary[0].background || '#111827'),
  primaryFg: useUtils().hexToStrippedRgb(useShop().shop.value?.brand?.colors.primary[0].foreground || '#F3F4F6'),
  secondaryBg: useUtils().hexToStrippedRgb(useShop().shop.value?.brand?.colors.secondary[0].background || '#1F2937'),
  secondaryFg: useUtils().hexToStrippedRgb(useShop().shop.value?.brand?.colors.secondary[0].foreground || '#F3F4F6'),
}))

const { shop } = useShop()
useHead({
  titleTemplate: (titleChunk?: string) => titleChunk
    ? `${titleChunk} | ${shop.value?.name}`
    : (shop.value?.name || 'Shopify Nuxt'),
  style: [
    {
      children: `
        @layer base {
          :root {
            --primary-background: ${colors.value.primaryBg};
            --primary-foreground: ${colors.value.primaryFg};
            --secondary-background: ${colors.value.secondaryBg};
            --secondary-foreground: ${colors.value.secondaryFg};
          }
        }
      `,
    },
  ],
})
</script>

<template>
  <div>
    <template v-if="isShopValid">
      <NuxtLayout>
        <NuxtPage>
          <slot />
        </NuxtPage>
      </NuxtLayout>
    </template>
    <div v-else>
      <p>Unable to retrieve shop data from Shopify</p>
    </div>
  </div>
</template>

<style lang="postcss">
html {
  @apply font-sans;
}
h1,h2,h3,h4,h5,h6 {
  @apply font-bold;
}
h1 {
  @apply text-2xl md:text-3xl lg:text-4xl;
}
h2 {
  @apply text-xl md:text-2xl lg:text-3xl;
}
h3 {
  @apply text-lg md:text-xl lg:text-2xl;
}
h4 {
  @apply text-base md:text-lg lg:text-xl;
}
h5 {
  @apply text-sm md:text-base lg:text-lg;
}
h6 {
  @apply text-sm lg:text-base;
}
</style>
