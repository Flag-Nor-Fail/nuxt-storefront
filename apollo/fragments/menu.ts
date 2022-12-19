import MenuItem from './menuItem'

export default gql`
  ${MenuItem}
  fragment Menu on Menu {
    handle
    id
    items {
      ...MenuItem
    }
    itemsCount
    title
  }
`
