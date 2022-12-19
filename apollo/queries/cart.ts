import Cart from '@/apollo/fragments/cart'

export default gql`
  ${Cart}
  query Cart (
    $id: ID!
    $countryCode: CountryCode
  ) @inContext (country: $countryCode) {
    cart (id: $id) {
      ...Cart
    }
  }
`
