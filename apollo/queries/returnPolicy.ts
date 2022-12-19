import ShopPolicy from '../fragments/shopPolicy'

export default gql`
  ${ShopPolicy}
  query ReturnPolicy {
    shop {
      refundPolicy {
        ...ShopPolicy
      }
    }
  }
`
