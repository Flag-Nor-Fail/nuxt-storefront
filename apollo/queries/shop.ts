import mediaImage from '@/apollo/fragments/mediaImage'

export default gql`
  ${mediaImage}
  query shop (
    $countryCode: CountryCode
    $language: LanguageCode
  ) @inContext (
    country: $countryCode
    language: $language
  ) {
    shop {
      brand {
        colors {
          primary {
            background
            foreground
          }
          secondary {
            background
            foreground
          }
        }
        coverImage {
          ...MediaImage
        }
        logo {
          ...MediaImage
        }
        shortDescription
        slogan
        squareLogo {
          ...MediaImage
        }
      }
      description
      id
      moneyFormat
      name
      paymentSettings {
        acceptedCardBrands
        cardVaultUrl
        countryCode
        currencyCode
        enabledPresentmentCurrencies
        shopifyPaymentsAccountId
        supportedDigitalWallets
      }
      primaryDomain {
        host
        sslEnabled
        url
      }
      shipsToCountries
    }
  }
`
