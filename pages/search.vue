<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import type {
  ProductConnection,
} from '@/types/shopify'
import SearchQuery from '@/apollo/queries/search'

const searchTerm = useRouteQuery('q', null, {
  mode: 'replace',
  route: useRoute(),
  router: useRouter(),
})

// handle search and results
const titleQueryString = computed(() => searchTerm.value ? `title:*${searchTerm.value}*` : null)
const variables = computed(() => ({
  first: 40,
  query: titleQueryString.value,
  countryCode: useLocalization().countryCode.value || 'US',
  reverse: true,
}))
interface SearchReturn {
  products: ProductConnection
}
const {
  result,
  loading,
  refetch,
  fetchMore,
} = useQuery<SearchReturn>(
  SearchQuery,
  { ...variables.value },
)
const products = computed(() => result.value?.products?.edges?.map(edge => edge.node) || [])

// watch search term change and debounce refetch
const searchLoading = ref(false)
watchDebounced(searchTerm, async (newVal, oldVal) => {
  if (newVal !== oldVal) {
    if (newVal !== '') {
      searchLoading.value = true
      await refetch({ ...variables.value })?.then(() => {
        searchLoading.value = false
      })
    }
  }
}, {
  debounce: 650,
})

// handle infinite scroll
const loadingMore = ref(false)
const loadMore = async () => {
  loadingMore.value = true
  await fetchMore({
    variables: {
      ...variables.value,
      after: result.value?.products?.pageInfo?.endCursor,
    },
    updateQuery(prev, { fetchMoreResult }) {
      if (!fetchMoreResult)
        return prev
      return {
        ...prev,
        products: {
          ...prev.products,
          edges: [
            ...prev.products.edges,
            ...fetchMoreResult.products.edges,
          ],
          pageInfo: fetchMoreResult.products.pageInfo,
        },
      }
    },
  })
  loadingMore.value = false
}

// layout and page data
useHead({
  title: 'SEARCH',
})
</script>

<template>
  <div>
    <!-- Search Heading -->
    <div class="border-b border-gray-200">
      <div class="container mx-auto">
        <h1>Search</h1>
        <input
          v-model="searchTerm"
          placeholder="Search by title..."
          class="w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-background focus:border-transparent"
        />
      </div>
    </div>

    <!-- Search Results -->
    <template v-if="result?.products.edges.length">
      <div class="grid grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Load More -->
      <div class="grid place-content-center p-6 h-[300px] bg-primary-background text-primary-foreground">
        <UIButton
          v-if="result.products.pageInfo.hasNextPage"
          @click="loadMore"
          :loading="loadingMore"
          color="secondary"
          icon="ion:reload"
        >
          Load More
        </UIButton>

        <p v-else>You've reached the end of the list</p>
      </div>
    </template>

    <div
      v-else
      class="p-6"
    >
      <p>Nothing found for "{{ searchTerm }}"</p>
    </div>

  </div>
</template>
