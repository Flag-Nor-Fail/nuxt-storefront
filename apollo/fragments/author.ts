export default gql`
  fragment Author on ArticleAuthor {
    bio
    email
    firstName
    lastName
    name
  }
`
