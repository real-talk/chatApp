import gql from 'graphql-tag'

export default gql`
  fragment Message on Message {
    id
    chat {
      id
      picture
      name
    }
    sender {
      id
      picture
      name
    }
    content
    createdAt
    ownership
  }
`


//Put this right under "createdAt" later
/* recipients {
  user {
    id
  }
  message {
    id
    chat {
      id
    }
  }
  chat {
    id
  }
  receivedAt
  readAt
} */