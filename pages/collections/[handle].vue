<script setup lang="ts">
import type { Collection } from '@/types/shopify'
import CollectionQuery from '@/apollo/queries/collection'

interface CollectionReturn {
  collection: Collection
}

const handle = useRoute().params.handle
const variables = {
  handle,
  first: 10,
}
const {
  result,
  loading,
  fetchMore,
  onResult,
} = useQuery<CollectionReturn>(CollectionQuery, { ...variables }, {})

const collectionExists = computed(() => {
  return !!result.value?.collection?.id
})

const loadingMore = ref(false)
const loadMore = () => {
  loadingMore.value = true
  fetchMore({
    query: CollectionQuery,
    variables: {
      ...variables,
      after: result.value?.collection.products.pageInfo.endCursor,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      loadingMore.value = false
      if (!fetchMoreResult)
        return prev
      return {
        ...prev,
        collection: {
          ...prev.collection,
          products: {
            ...prev.collection.products,
            edges: [
              ...prev.collection.products.edges,
              ...fetchMoreResult.collection.products.edges,
            ],
            pageInfo: fetchMoreResult.collection.products.pageInfo,
          },
        },
      }
    },
  })
}
</script>

<template>
  <div>
    <template v-if="collectionExists">
      <template v-if="result?.collection?.id">

        <Head>
          <Title>{{ result.collection.seo.title || result.collection.title || undefined }}</Title>
          <Meta
            name="description"
            :content="result.collection.seo.description || result.collection.description || useShop().shop.value?.description || undefined" />
        </Head>

        <div
          class="px-6 pt-24 pb-6 border-b border-gray-200"
        >
          <h1>{{ result.collection.title }}</h1>
          <p v-if="result.collection.description">
            {{ result.collection.description }}
          </p>
        </div>
        <div class="flex justify-between px-6 py-2 border-b border-gray-200">
          <div
            v-if="result.collection.products.filters.length"
            class="flex items-center gap-2"
          >
            <UIButton
              icon="ion:filter-circle"
              color="gray"
            >
              Filters ({{ result.collection.products.filters.length }})
            </UIButton>
            <UIButton
              color="gray"
              outline
              icon="ion:close-circle"
            >
              Clear all (0)
            </UIButton>
          </div>
          <UIButton
            color="gray"
            icon="ion:swap-vertical"
            outline
          >
            Sort
          </UIButton>
        </div>

        <div
          v-if="result.collection.products.edges.length"
          class="grid grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4"
        >
          <ProductCard
            v-for="product in result.collection.products.edges.map((edge) => edge.node)"
            :key="product.id"
            :product="product"
          />
        </div>

        <div
          v-else
          class="p-6"
        >
          <p>No products found.</p>
        </div>

        <div class="grid place-content-center p-6 h-[300px] bg-primary-background text-primary-foreground">
          <UIButton
            v-if="result.collection.products.pageInfo.hasNextPage"
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
      <NotFound v-else />
    </template>
  </div>
</template>
