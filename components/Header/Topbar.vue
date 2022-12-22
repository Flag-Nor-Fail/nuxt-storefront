<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/vue'

const countries = useLocalization().availableCountries.value || null

const topbarLinks = [
  {
    label: 'Sign In',
    to: '/account/login',
  },
  {
    label: 'Create an account',
    to: '/account/register',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 px-6 py-2 bg-secondary-background text-secondary-foreground">
    <!-- Country Select -->
    <!-- TODO: finish this -->
    <div v-if="countries">
      <Popover
        v-slot="{ open }"
        class="relative"
      >
        <PopoverButton>
          <UIButton
            size="sm"
            color="dark"
            icon="ion:md-globe"
          >
            {{ useLocalization().country.value?.name }}
          </UIButton>
        </PopoverButton>

        <PopoverPanel
          v-if="countries"
          class="absolute left-0 z-10 py-1 text-sm text-gray-800 bg-white border border-gray-200 rounded-md shadow-md top-full"
        >
          <ul class="list-none">
            <li
              v-for="currency in countries"
              :key="currency.isoCode"
              class="px-4 py-2 hover:bg-gray-100"
            >
              {{ currency.name }}
            </li>
          </ul>
        </PopoverPanel>
      </Popover>
    </div>

    <!-- Announcement -->
    <div
      class="flex items-center text-sm"
      :class="[
        countries?.length ? 'justify-center col-start-2' : 'justify-start col-start-1',
      ]"
    >
      Get free delivery on orders over $100
    </div>

    <!-- Topbar Links -->
    <div class="flex items-center justify-end col-start-3">
      <NuxtLink
        v-for="(link, i) in topbarLinks"
        :key="link.label"
        :to="link.to"
        class="flex items-center text-sm font-medium group"
      >
        <span class="px-4 group-hover:underline">
          {{ link.label }}
        </span>
        <span
          v-if="i < topbarLinks.length - 1"
          class="w-[1px] h-5 bg-secondary-foreground/40 block" />
      </NuxtLink>
    </div>
  </div>
</template>
