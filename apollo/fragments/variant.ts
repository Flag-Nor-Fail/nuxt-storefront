import Money from './money'
import Image from './image'

export default gql`
  ${Money}
  ${Image}
  fragment Variant on ProductVariant {
    id
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
    # product
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
    # unitPriceMeasurement {}
    weight
    weightUnit
  }
`
