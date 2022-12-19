import Image from './image'

export default gql`
  ${Image}
  fragment MediaImage on MediaImage {
    alt
    id
    image {
      ...Image
    }
    mediaContentType
    previewImage {
      ...Image
    }
  }
`
