import { gql } from 'apollo-server-express';

export default gql`
  type Artist implements Node {
    createdAt: String!
    email: String
    facebookHandle: String
    genre: Genre
    id: ID!
    imgUrl: String
    instagramHandle: String
    name: String!
    projects: [Project]
    soundcloudHandle: String
    twitterHandle: String
    updatedAt: String!
    users: [User]!
    website: String
  }

  type Artists {
    nodes: [Artist]
  }

  extend type Query {
    artist(id: ID!): Artist
    artists: Artists
  }
`;
