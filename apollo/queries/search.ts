import PageInfo from '@/apollo/fragments/pageInfo'
import ProductSummary from '@/apollo/fragments/productSummary'

export default gql`
  ${PageInfo}
  ${ProductSummary}
  query Products(
    $first: Int!
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: ProductSortKeys
    $countryCode: CountryCode
    $query: String
  ) @inContext(country: $countryCode) {
    products (
      first: $first
      after: $after
      before: $before
      reverse: $reverse
      sortKey: $sortKey
      query: $query
    ) {
      pageInfo {
        ...PageInfo
      }
      edges {
        cursor
        node {
          ...ProductSummary
        }
      }
    }
  }
`
