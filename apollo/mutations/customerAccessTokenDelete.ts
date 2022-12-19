export default gql`
  mutation CustomerAccessTokenDelete(
    $customerAccessToken: String!
  ) {
    customerAccessTokenDelete(
      customerAccessToken: $customerAccessToken
    ) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`
