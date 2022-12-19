export default gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    items {
      id
      resourceId
      tags
      title
      type
      url
      items {
        id
        resourceId
        tags
        title
        type
        url
      }
    }
    tags
    title
    type
    url
  }
`
