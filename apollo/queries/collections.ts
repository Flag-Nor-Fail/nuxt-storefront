import PageInfo from '../fragments/pageInfo'

export default gql`
  ${PageInfo}
  query collections (
    $first: Int
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: CollectionSortKeys
    $query: String
  ) {
    collections (
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
          id
          title
          handle
        }
      }
    }
  }
`
