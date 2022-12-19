import Page from '@/apollo/fragments/page'

export default gql`
  ${Page}
  query Page(
    $id: ID
    $handle: String
  ) {
    page (
      id: $id
      handle: $handle
    ) {
      ...Page
    }
  }
`
