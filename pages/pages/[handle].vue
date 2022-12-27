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
    <template v-if="result?.page.id">
      <Head>
        <Title>{{ result.page.seo?.title || result.page.title || undefined }}</Title>
        <Meta
          name="description"
          :content="result.page.seo?.description || result.page.bodySummary || undefined" />
      </Head>
      <div
        v-html="result.page.body"
        class="w-full max-w-full prose-sm prose"
      >
      </div>
    </template>
    <NotFound v-else />
  </div>
</template>
