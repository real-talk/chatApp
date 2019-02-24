import gql from 'graphql-tag'
import message from './message.fragment'
export default gql `
  fragment Chat on Chat {
    id
    name
    picture
    allTimeMembers {
      id
      name
      picture
    }
    owner {
      id
      name
      picture
    }
    lastMessage {
      ...Message
    }
  }
  ${message}
`