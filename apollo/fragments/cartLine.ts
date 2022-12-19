import Money from './money'
import ProductVariant from './productVariant'

export default gql`
  ${Money}
  ${ProductVariant}
  fragment CartLine on CartLine {
    cost {
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
    }
    discountAllocations {
      discountedAmount {
        ...Money
      }
    }
    id
    merchandise {
      ... on ProductVariant {
        ...ProductVariant
      }
    }
    quantity
  }
`
