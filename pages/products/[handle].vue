<script setup lang="ts">
import type {
  Product,
  ProductVariant,
} from '@/types/shopify'
import ProductQuery from '@/apollo/queries/product'

interface ProductReturn {
  product: Product
}
const {
  result,
  loading,
  onResult,
} = useQuery<ProductReturn>(ProductQuery, {
  handle: useRoute().params.handle,
  country: useLocalization().countryCode.value,
}, {})

// if there is only one variant, select it
// otherwise, leave it null
const selectedVariant = ref<ProductVariant | null>(null)
const assignInitialVariant = () => {
  if (result.value?.product.variants.edges.length === 1)
    selectedVariant.value = result.value?.product.variants.edges[0].node
  else
    selectedVariant.value = null
}
onResult(assignInitialVariant)
onMounted(assignInitialVariant)

const loadingAddToCart = ref(false)
const addToCart = async () => {
  loadingAddToCart.value = true
  if (!selectedVariant.value?.id)
    return
  await useCart().add([{
    merchandiseId: selectedVariant.value.id,
  }]).finally(() => {
    loadingAddToCart.value = false
  })
}
</script>

<template>
  <div>
    <template v-if="!loading">
      <template v-if="result?.product?.id">

        <Head>
          <Title>{{ result.product.seo.title || result.product.title || undefined }}</Title>
          <Meta
            name="description"
            :content="result.product.seo.description || result.product.description || useShop().shop.value?.description || undefined" />
        </Head>

        <div class="container grid grid-cols-12 gap-10 p-6 mx-auto">

          <!-- Images -->
          <div
            v-if="result.product.media.edges.length"
            class="grid col-span-12 gap-6 md:col-span-6 lg:col-span-5"
          >
            <template
              v-for="(media, i) in result.product.media.edges.map((edge) => edge.node)"
              :key="i"
            >
              <div class="overflow-hidden border border-gray-200 rounded-lg">
                <template v-if="media.__typename === 'MediaImage'">
                  <img
                    :src="media.previewImage?.url"
                    :alt="media.alt || media.previewImage?.altText || ''"
                    class="w-full"
                  />
                </template>
                <template v-else-if="media.mediaContentType === 'VIDEO'">
                  <video>
                    <source
                      :src="media.previewImage?.url"
                      type="video/mp4"
                    />
                  </video>
                </template>
              </div>
            </template>
          </div>

          <div class="col-span-12 gap-4 md:col-span-6 lg:col-span-7">
            <h1>{{ result.product.title }}</h1>
            <UIPriceRange
              v-if="!selectedVariant?.id"
              as="h4"
              :price-range="result.product.priceRange"
              :compare-at-price-range="result.product.compareAtPriceRange"
            />
            <UIPrice
              v-else
              as="h4"
              :price="selectedVariant?.price"
              :compare-at-price="selectedVariant?.compareAtPrice || undefined"
            />

            <div v-if="result.product.variants.edges.length > 1">
              <select v-model="selectedVariant" placeholder="Select Variant">
                <option disabled>
                  Select Variant
                </option>
                <option
                  v-for="variant in result.product.variants.edges.map((edge) => edge.node)"
                  :key="variant.id"
                  :value="variant"
                >
                  {{ variant.title }}
                </option>
              </select>
            </div>

            <div>
              <UIButton
                :disabled="!selectedVariant?.id"
                :loading="loadingAddToCart"
                icon="ion:add-circle"
                @click="addToCart"
              >
                {{ useCart().isInCart(selectedVariant?.id ?? '') ? 'Added to Cart' : 'Add to Cart' }}
              </UIButton>
            </div>

            <div v-html="result.product.descriptionHtml"></div>
          </div>

        </div>

      </template>
      <NotFound v-else />
    </template>
  </div>
</template>
