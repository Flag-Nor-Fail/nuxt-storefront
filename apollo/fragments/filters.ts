export default gql`
  fragment Filters on Filter {
    id
    label
    type
    values {
      count
      id
      input
      label
    }
  }
`
