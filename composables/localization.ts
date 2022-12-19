import type {
  Country,
  CountryCode,
  Language,
  Localization,
} from '@/types/shopify'
import LocalizationQuery from '@/apollo/queries/localization'

interface LocalizationRet {
  localization: Localization
}

export const useLocalization = () => {
  // Cookies
  const countryCode = useStatefulCookie<CountryCode>('country_code')

  // State
  const availableCountries = useState<Country[]>('available_countries')
  const availableLanguages = useState<Language[]>('available_languages')
  const country = useState<Country>('country')
  const language = useState<Language>('language')

  // Use request context to return default country code
  const defaultCountryCode = computed(() => {
    const stagedCountryCode = ref('US')
    if (process.server) {
      const app = useNuxtApp()
      const reqLocale = app.ssrContext?.event.node.req.headers['accept-language']
      stagedCountryCode.value = reqLocale?.split('-')[1] ?? 'US'
    }
    else {
      const navigatorCountryCode = navigator.language.split('-')[1]
      stagedCountryCode.value = navigatorCountryCode ?? 'US'
    }
    return stagedCountryCode.value
  })

  // Get localization data from Shopify
  const localize = async (newCountryCode?: CountryCode) => {
    await useAsyncQuery<LocalizationRet>(LocalizationQuery, {
      countryCode: newCountryCode ?? defaultCountryCode.value,
    })
      .then(({ data }) => {
        if (data.value?.localization.country.isoCode.length) {
          countryCode.value = data.value.localization.country.isoCode
          availableCountries.value = data.value.localization.availableCountries
          availableLanguages.value = data.value.localization.availableLanguages
          country.value = data.value.localization.country
          language.value = data.value.localization.language
        }
      })
      .catch((err) => {
        console.error('Error getting localization data from Shopify', err)
      })
  }

  const changeCountry = async (newCountryCode: CountryCode) => {
    await localize(newCountryCode)
    await useCart().retrieveCart()
  }

  return {
    countryCode,
    availableCountries,
    availableLanguages,
    country,
    language,
    defaultCountryCode,
    localize,
    changeCountry,
  }
}
