import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $countryCode: CountryCode
  ) @inContext(country: $countryCode) {
    cartLinesUpdate(
      cartId: $cartId
      lines: $lines
    ) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
`
