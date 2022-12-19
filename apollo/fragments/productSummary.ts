import Image from './image'
import Video from './video'
import PriceRange from './priceRange'

export default gql`
  ${Image}
  ${Video}
  ${PriceRange}
  fragment ProductSummary on Product {
    availableForSale
    compareAtPriceRange {
      ...PriceRange
    }
    createdAt
    description
    featuredImage {
      ...Image
    }
    handle
    id
    media(first: 10) {
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
    giftWithPurchaseThreshold: metafield (
      namespace: "c_f"
      key: "[p]Gift Threshold Amount"
    ) {
      key
      value
    }
    priceRange {
      ...PriceRange
    }
    title
    options (first: 250) {
      id
      name
      values
    }
    variants (first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`
