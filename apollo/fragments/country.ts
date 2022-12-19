export default gql`
  fragment Country on Country {
    availableLanguages {
      endonymName
      isoCode
      name
    }
    currency {
      isoCode
      name
      symbol
    }
    isoCode
    name
    unitSystem
  }
`
