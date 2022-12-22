<script setup lang="ts">
const props = withDefaults(defineProps<{
  outline?: boolean
  color?: 'primary' | 'secondary' | 'dark' | 'gray' | 'light' | 'green' | 'red' | 'yellow'
  size?: 'sm' | 'base' | 'lg'
  fromGroup?: boolean
  stretch?: boolean
  pill?: boolean
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  loading?: boolean
}>(), {
  color: 'primary',
  size: 'base',
  type: 'button',
  fromGroup: false,
  stretch: false,
  pill: false,
  disabled: false,
  iconPosition: 'left',
  loading: false,
  outline: false,
})

const slots = useSlots()

// if 'to' prop is not an absolute URL, use NuxtLink
const is = ['http', 'https', 'www'].some(str => props.to?.includes(str)) ? 'a' : resolveComponent('NuxtLink')

const isIconOnly = computed(() => (slots.default && !slots.default().length) && props.icon)
</script>

<template>
  <component
    :is="to ? is : 'button'"
    :to="is === 'NuxtLink' ? to : undefined"
    :href="is === 'a' ? to : undefined"
    :disabled="disabled"
    :type="type || 'button'"
    class="relative items-center justify-center font-medium border focus:ring-4 focus:outline-none"
    :class="[
      // States
      disabled && 'opacity-50 cursor-not-allowed',
      loading && 'pointer-events-none',
      stretch ? 'w-full text-center flex' : 'inline-flex',
      pill ? 'rounded-full' : 'rounded-lg',
      // Sizes
      size === 'sm' && 'text-sm p-1',
      size === 'base' && 'p-2',
      size === 'lg' && 'text-lg p-4',
      // Colors
      color === 'primary'
        && !outline
          ? 'bg-primary-background text-primary-foreground border-transparent focus:ring-primary-background/30 hover:brightness-95 focus:brightness-95'
          : color === 'primary' && 'bg-transparent focus:bg-primary-background focus:text-primary-foreground hover:bg-primary-background border-primary-background hover:text-primary-foreground text-primary-background focus:ring-primary-background/30',
      color === 'secondary'
        && !outline
           ? 'bg-secondary-background text-secondary-foreground border-transparent hover:brightness-95 focus:brightness-95 focus:ring-secondary-background/30'
           : color === 'secondary' && 'border-secondary-background bg-transparent focus:bg-secondary-background focus:text-secondary-foreground hover:bg-secondary-background hover:text-secondary-foreground text-secondary-background focus:ring-secondary-background/30',
      color === 'green'
        && !outline
        ? 'border-transparent bg-emerald-500 text-gray-100 hover:bg-emerald-600 focus:bg-emerald-600 focus:ring-emerald-500/30'
        : color === 'green' && 'border-emerald-500 bg-transparent focus:bg-emerald-500 focus:text-gray-100 hover:bg-emerald-500 hover:text-gray-100 text-emerald-500 focus:ring-emerald-500/30',
      color === 'yellow'
        && !outline
        ? 'border-transparent bg-yellow-500 text-gray-100 hover:bg-yellow-600 focus:bg-yellow-600 focus:ring-yellow-500/30'
        : color === 'yellow' && 'border-yellow-500 bg-transparent focus:bg-yellow-500 focus:text-gray-100 hover:bg-yellow-500 hover:text-gray-100 text-yellow-500 focus:ring-yellow-500/30',
      color === 'red'
        && !outline
        ? 'border-transparent bg-red-500 text-gray-100 hover:bg-red-600 focus:bg-red-600 focus:ring-red-200'
        : color === 'red' && 'border-red-500 bg-transparent focus:bg-red-500 focus:text-gray-100 hover:bg-red-500 hover:text-gray-100 text-red-500 focus:ring-red-200',
      color === 'dark'
        && !outline
          ? 'bg-gray-800 text-gray-100 border-transparent hover:bg-gray-700 focus:bg-gray-700 focus:ring-gray-200'
          : color === 'dark' && 'border-gray-800 hover:border-transparent focus:border-transparent bg-transparent text-gray-800 hover:bg-gray-700 focus:bg-gray-700 focus:ring-gray-200 hover:text-gray-100 focus:text-gray-100',
      color === 'light'
        && !outline
        ? 'border-transparent bg-white text-gray-800 hover:text-primary-background hover:border-gray-100 hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-100 focus:border-transparent focus:text-primary-background'
        : color === 'light' && 'border-gray-100 bg-transparent hover:text-primary-background hover:border-gray-100 hover:bg-gray-50 focus:bg-gray-50 focus:ring-gray-100 focus:border-transparent focus:text-primary-background',
      color === 'gray'
        && !outline
        ? 'bg-gray-200 text-gray-800 border-transparent hover:bg-gray-300 focus:ring-gray-100 focus:bg-gray-300'
        : color === 'gray' && 'bg-transparent border-gray-200 text-gray-800 hover:bg-gray-300 hover:border-gray-100 focus:bg-gray-300 focus:ring-gray-100 hover:border-transparent focus:border-transparent',
    ]"
  >

    <Icon
      v-if="iconPosition === 'left' && icon"
      :name="loading ? 'mdi:loading' : icon"
      :class="[
        size === 'sm' && 'w-5 h-5',
        size === 'base' && 'w-6 h-6',
        size === 'lg' && 'w-7 h-7',
        loading && 'animate-spin',
      ]"
    />

    <div
      v-if="!isIconOnly && loading && !icon"
      class="absolute inset-0 grid bg-inherit place-content-center text-inherit"
    >
      <Icon
        name="mdi:loading"
        class="animate-spin"
        :class="[
          size === 'sm' && 'w-5 h-5',
          size === 'base' && 'w-6 h-6',
          size === 'lg' && 'w-7 h-7',
        ]"
      />
    </div>

    <span
      v-if="!isIconOnly"
      class="flex items-center gap-2 font-medium"
      :class="[
        size === 'sm' && 'px-2',
        size === 'base' && 'px-3',
        size === 'lg' && 'px-5',
      ]"
    >
      <slot />
    </span>

    <Icon
      v-if="iconPosition === 'right' && icon"
      :name="loading ? 'mdi:loading' : icon"
      :class="[
        size === 'sm' && 'w-5 h-5',
        size === 'base' && 'w-6 h-6',
        size === 'lg' && 'w-7 h-7',
        loading && 'animate-spin',
      ]"
    />

  </component>
</template>
