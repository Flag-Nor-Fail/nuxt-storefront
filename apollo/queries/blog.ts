import Seo from '@/apollo/fragments/seo'
import PageInfo from '@/apollo/fragments/pageInfo'
import ArticleSummary from '@/apollo/fragments/articleSummary'

export default gql`
  ${Seo}
  ${PageInfo}
  ${ArticleSummary}
  query Blog (
    $handle: String
    $first: Int
    $after: String
    $last: Int
    $before: String
    $reverse: Boolean
    $sortKey: ArticleSortKeys
    $query: String
  ) {
    blog (
      handle: $handle
    ) {
      handle
      id
      seo {
        ...Seo
      }
      title
      articles (
        first: $first
        after: $after
        last: $last
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
            ...ArticleSummary
          }
        }
      }
    }
  }
`
