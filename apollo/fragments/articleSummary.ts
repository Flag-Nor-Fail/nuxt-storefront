import Author from './author'
import Image from './image'

export default gql`
  ${Author}
  ${Image}
  fragment ArticleSummary on Article {
    authorV2 {
      ...Author
    }
    excerpt
    handle
    id
    image {
      ...Image
    }
    publishedAt
    tags
    title
  }
`
