export default gql`
  fragment Image on Image {
    altText
    height
    id
    url (transform: {
      maxHeight: 800,
      preferredContentType: WEBP
    })
    width
  }
`
