import Author from './author'
import Image from './image'

export default gql`
  ${Author}
  ${Image}
  fragment Article on Article {
    authorV2 {
      ...Author
    }
    content
    contentHtml
    excerpt
    excerptHtml
    handle
    id
    image {
      ...Image
    }
    onlineStoreUrl
    publishedAt
    tags
    title
  }
`
