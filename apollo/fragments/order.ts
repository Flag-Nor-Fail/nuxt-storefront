import Money from './money'
import Address from './address'

export default gql`
  ${Money}
  ${Address}
  fragment Order on Order {
    cancelReason
    canceledAt
    currencyCode
    currentSubtotalPrice {
      ...Money
    }
    currentTotalDuties {
      ...Money
    }
    currentTotalPrice {
      ...Money
    }
    currentTotalTax {
      ...Money
    }
    customerLocale
    customerUrl
    edited
    email
    financialStatus
    fulfillmentStatus
    id
    name
    orderNumber
    originalTotalDuties {
      ...Money
    }
    originalTotalPrice {
      ...Money
    }
    phone
    processedAt
    shippingAddress {
      ...Address
    }
    shippingDiscountAllocations {
      allocatedAmount {
        ...Money
      }
      # discountApplication {}
    }
    statusUrl
    subtotalPrice {
      ...Money
    }
    successfullFulfillments {
      trackingCompany
      trackingInfo {
        number
        url
      }
    }
    totalPrice {
      ...Money
    }
    totalRefunded {
      ...Money
    }
    totalShippingPrice {
      ...Money
    }
    totalTax {
      ...Money
    }
  }
`
