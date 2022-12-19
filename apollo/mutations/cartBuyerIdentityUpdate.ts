import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  mutation cartBuyerIdentityUpdate(
    $buyerIdentity: CartBuyerIdentityInput!
    $cartId: ID!
    $countryCode: CountryCode
  ) @inContext(country: $countryCode) {
    cartBuyerIdentityUpdate(
      buyerIdentity: $buyerIdentity
      cartId: $cartId
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
