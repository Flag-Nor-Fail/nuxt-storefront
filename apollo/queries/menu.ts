import Menu from '../fragments/menu'

export default gql`
  ${Menu}
  query Menu (
    $handle: String!
    $countryCode: CountryCode
    $language: LanguageCode
  ) @inContext (
    country: $countryCode
    language: $language
  ) {
    menu (handle: $handle) {
      ...Menu
    }
  }
`
