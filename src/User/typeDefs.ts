import gql from 'graphql-tag';

export default gql`
  type User implements Node {
    id: ID!
    email: String!
    fName: String!
    lName: String!
    artists: [Artist]
    createdAt: String!
    credits: [Credit]
    facebookHandle: String
    imgUrl: String
    instagramHandle: String
    roles: [Role]
    soundcloudHandle: String
    twitterHandle: String
    updatedAt: String!
    website: String
  }

  input UserInput {
    email: String!
    fName: String!
    lName: String!
    facebookHandle: String
    imgUrl: String
    instagramHandle: String
    roleIds: [String]
    soundcloudHandle: String
    twitterHandle: String
    website: String
  }

  extend type Query {
    user(id: ID, email: String): User
    users: [User]
    me: User
  }

  extend type Mutation {
    createUser(user: UserInput): User
    updateUser(id: ID!, user: UserInput): User
  }
`;
