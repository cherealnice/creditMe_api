import { gql } from 'apollo-server-express';

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

  extend type Query {
    user(id: ID, email: String): User
    users: [User]
    me: User
  }
`;
