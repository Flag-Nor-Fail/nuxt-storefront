import Image from '@/apollo/fragments/image'

export default gql`
  ${Image}
  fragment Video on Video {
    alt
    id
    mediaContentType
    previewImage {
      ...Image
    }
    sources {
      format
      height
      mimeType
      url
      width
    }
  }
`
