import Customer from './customer'

export default gql`
  ${Customer}
  fragment BuyerIdentity on CartBuyerIdentity {
    countryCode
    customer {
      ...Customer
    }
    email
    phone
  }
`
