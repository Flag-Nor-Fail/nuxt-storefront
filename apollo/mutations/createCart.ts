import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  mutation CreateCart (
    $input: CartInput
    $countryCode: CountryCode
  ) @inContext (country: $countryCode) {
    cartCreate (
      input: $input
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
