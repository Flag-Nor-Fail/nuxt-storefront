import Money from './money'
import Image from './image'
import ProductSummary from './productSummary'

export default gql`
  ${Money}
  ${Image}
  ${ProductSummary}
  fragment ProductVariant on ProductVariant {
    availableForSale
    barcode
    compareAtPrice {
      ...Money
    }
    currentlyNotInStock
    id
    image {
      ...Image
    }
    price {
      ...Money
    }
    product {
      ...ProductSummary
    }
    quantityAvailable
    requiresShipping
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      ...Money
    }
    weight
    weightUnit
  }
`
