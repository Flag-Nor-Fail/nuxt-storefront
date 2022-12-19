import MailingAddress from './address'

export default gql`
  ${MailingAddress}
  fragment Customer on Customer {
    acceptsMarketing
    addresses (first: 250) {
      edges  {
        node {
          ...MailingAddress
        }
      }
    }
    createdAt
    defaultAddress {
      ...MailingAddress
    }
    displayName
    email
    firstName
    id
    # lastIncompleteCheckout
    lastName
    numberOfOrders
    phone
    tags
    updatedAt
  }
`
