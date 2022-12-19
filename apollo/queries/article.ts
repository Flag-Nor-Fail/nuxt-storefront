import Article from '@/apollo/fragments/article'

export default gql`
  ${Article}
  query Article(
    $blogHandle: String!
    $articleHandle: String!
  ) {
    blog (
      handle: $blogHandle
    ) {
      id
      articleByHandle (
        handle: $articleHandle
      ) {
        ...Article
      }
    }
  }
`
