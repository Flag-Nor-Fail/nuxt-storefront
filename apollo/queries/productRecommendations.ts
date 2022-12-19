import ProductSummary from '@/apollo/fragments/productSummary'

export default gql`
  ${ProductSummary}
  query productRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...ProductSummary
    }
  }
`
