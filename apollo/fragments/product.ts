import Video from '@/apollo/fragments/video'
import Image from '@/apollo/fragments/image'
import PriceRange from '@/apollo/fragments/priceRange'
import Seo from '@/apollo/fragments/seo'
import Variant from '@/apollo/fragments/variant'

export default gql`
  ${Video}
  ${Image}
  ${Variant}
  ${PriceRange}
  ${Seo}
  fragment Product on Product {
    availableForSale
    compareAtPriceRange {
      ...PriceRange
    }
    createdAt
    description
    descriptionHtml
    handle
    id
    media(first: 250) {
      edges {
        node {
          ... on Video {
            ...Video
          }
          previewImage {
            ...Image
          }
        }
      }
    }
    isGiftCard
    # Metafield
    # Metafields
    onlineStoreUrl
    options (first: 250) {
      id
      name
      values
    }
    priceRange {
      ...PriceRange
    }
    productType
    publishedAt
    requiresSellingPlan
    seo {
      ...Seo
    }
    tags
    title
    totalInventory
    updatedAt
    # variantBySelectedOptions
    variants (first: 250) {
      edges {
        node {
          ...Variant
        }
      }
    }
    vendor
  }
`
