import Product from '@/apollo/fragments/product'

export default gql`
  ${Product}
  query Product(
    $handle: String
    $id: ID
    $countryCode: CountryCode
    $language: LanguageCode
  ) @inContext(
    country: $countryCode
    language: $language
  ) {
    product(
      handle: $handle
      id: $id
    ) {
      ...Product
    }
  }
`
