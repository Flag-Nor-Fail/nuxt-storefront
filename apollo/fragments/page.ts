import SEO from './seo'

export default gql`
  ${SEO}
  fragment Page on Page {
    body
    bodySummary
    createdAt
    handle
    id
    onlineStoreUrl
    seo {
      ...Seo
    }
    title
    updatedAt
  }
`
