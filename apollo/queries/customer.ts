import CustomerFragment from '@/apollo/fragments/customer'

export default gql`
  ${CustomerFragment}
  query Customer (
    $customerAccessToken: String!
  ) {
    customer (customerAccessToken: $customerAccessToken) {
      ...Customer
    }
  }
`
