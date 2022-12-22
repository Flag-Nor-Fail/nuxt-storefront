<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/vue'
import type { Menu } from '@/types/shopify'

const props = defineProps<{
  menu: Menu
}>()

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <div class="flex items-center">
    <component
      v-for="item in menu.items"
      :key="item.id"
      :is="item.items.length ? Popover : 'div'"
      class="relative"
      v-slot="scope"
    >
      <component
        :is="item.items.length ? PopoverButton : NuxtLink"
        :to="useUtils().resolveRelativeLink(item.url || '')"
        class="relative inline-flex items-center gap-2 px-4 py-6 text-gray-700 rounded-md focus-visible:text-primary-background group focus:outline-none hover:text-primary-background focus-visible:ring-2 focus-visible:ring-primary-background/75"
        active-class="after:bg-primary-background after:bottom-0 after:h-1 after:absolute after:inset-x-0"
      >
        <span class="text-sm">
          {{ item.title }}
        </span>
        <Icon
          v-if="item.items.length"
          name="ph:caret-down-bold"
          :class="{
            'transform rotate-180': scope?.open,
          }"
          class="transition-transform duration-200"
        />
      </component>
      <PopoverPanel
        v-if="item.items.length"
        class="absolute z-20 block max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm left-1 lg:max-w-3xl top-full"
      >
        <div class="flex flex-col">
          <NuxtLink
            v-for="subItem in item.items"
            :key="subItem.id"
            :to="useUtils().resolveRelativeLink(subItem.url || '')"
            class="min-w-[150px] px-4 py-2 text-gray-700 hover:bg-primary-background hover:text-primary-foreground"
            exact-active-class="bg-primary-background text-primary-foreground"
            @click="scope?.close"
          >
            {{ subItem.title }}
          </NuxtLink>
        </div>
      </PopoverPanel>
    </component>
  </div>
</template>
