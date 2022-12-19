import Country from '@/apollo/fragments/country'
import Language from '@/apollo/fragments/language'

export default gql`
  ${Country}
  ${Language}
  query localization (
    $countryCode: CountryCode
  ) @inContext (country: $countryCode) {
    localization {
      availableCountries {
        ...Country
      }
      availableLanguages {
        endonymName
        isoCode
        name
      }
      country {
        ...Country
      }
      language {
        ...Language
      }
    }
  }
`
