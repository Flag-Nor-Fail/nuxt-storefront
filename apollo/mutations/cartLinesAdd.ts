import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  mutation cartLinesAdd(
    $cartId: ID!,
    $lines: [CartLineInput!]!
    $countryCode: CountryCode
  ) @inContext(country: $countryCode) {
    cartLinesAdd(
      cartId: $cartId,
      lines: $lines
    ) {
      cart {
        ...Cart
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`
