<script setup lang="ts">
import type {
  Menu,
  MenuItem,
} from '@/types/shopify'
import MenuQuery from '@/apollo/queries/menu'

const shop = useShop().shop.value

interface MenuReturn {
  menu: Menu
}
const {
  data,
} = await useAsyncQuery<MenuReturn>(MenuQuery, {
  handle: 'main-menu',
})
</script>

<template>
  <header
    class="w-full bg-primary-foreground"
  >
    <HeaderTopbar />
    <div class="flex items-center justify-between px-6">
      <div class="flex items-center gap-4">
        <Branding />
        <HeaderNavigation
          v-if="data?.menu.id"
          :menu="data.menu"
        />
      </div>
      <div class="flex items-center">
        <HeaderAccessories />
      </div>
    </div>
  </header>
</template>
