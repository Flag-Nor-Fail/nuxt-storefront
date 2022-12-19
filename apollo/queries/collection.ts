import Image from '@/apollo/fragments/image'
import Video from '@/apollo/fragments/video'
import SEO from '@/apollo/fragments/seo'
import PageInfo from '@/apollo/fragments/pageInfo'
import ProductSummary from '@/apollo/fragments/productSummary'
import ProductFilters from '@/apollo/fragments/filters'

export default gql`
  ${Image}
  ${Video}
  ${SEO}
  ${PageInfo}
  ${ProductSummary}
  ${ProductFilters}
  query Collection(
    $handle: String
    $id: ID
    $first: Int
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: ProductCollectionSortKeys
    $filters: [ProductFilter!]
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(
    country: $countryCode
    language: $languageCode
  ) {
    collection (handle: $handle, id: $id) {
      description
      descriptionHtml
      gender: metafield (namespace: "custom", key: "gender") {
        id
        value
      }
      gridMedia: metafield (namespace: "custom", key: "grid_media") {
        id
        value
        type
        key
        references (first: 50) {
          nodes {
            ... on MediaImage {
              id
              image {
                ...Image
              }
            }
            ... on Video {
              ...Video
            }
          }
        }
      }
      handle
      id
      image {
        ...Image
      }
      onlineStoreUrl
      seo {
        ...Seo
      }
      title
      updatedAt
      products (
        first: $first
        after: $after
        before: $before
        reverse: $reverse
        sortKey: $sortKey
        filters: $filters
      ) {
        pageInfo {
          ...PageInfo
        }
        filters {
          ...Filters
        }
        edges {
          cursor
          node {
            ...ProductSummary
          }
        }
      }
    }
  }
`
