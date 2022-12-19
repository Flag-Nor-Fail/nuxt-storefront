export default gql`
  fragment PriceRange on ProductPriceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
    minVariantPrice {
      amount
      currencyCode
    }
  }
`
