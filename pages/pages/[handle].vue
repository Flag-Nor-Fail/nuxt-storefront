<script setup lang="ts">
import PageQuery from '@/apollo/queries/page'
import type { Page } from '@/types/shopify'

interface PageReturn {
  page: Page
}
const {
  result,
  error,
  loading,
} = useQuery<PageReturn>(PageQuery, {
  handle: useRoute().params.handle,
})
</script>

<template>
  <div class="overflow-x-hidden max-w-screen">
    <div
      v-if="result?.page.id"
      v-html="result.page.body"
      class="w-full max-w-full prose-sm prose"
    >
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>
