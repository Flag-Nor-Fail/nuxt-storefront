import CartLine from './cartLine'
import BuyerIdentity from './buyerIdentity'

export default gql`
  ${CartLine}
  ${BuyerIdentity}
  fragment Cart on Cart {
    attributes {
      key
      value
    }
    buyerIdentity {
      ...BuyerIdentity
    }
    checkoutUrl
    createdAt
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    discountCodes {
      applicable
      code
    }
    id
    lines (first: 250) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...CartLine
        }
      }
    }
  }
`
