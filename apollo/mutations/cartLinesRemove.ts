import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $countryCode: CountryCode
  ) @inContext(country: $countryCode) {
    cartLinesRemove(
      cartId: $cartId
      lineIds: $lineIds
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
