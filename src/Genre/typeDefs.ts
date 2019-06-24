import { gql } from 'apollo-server-express';

export default gql`
  type Genre implements Node {
    artists: [Artist!]
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
  }

  extend type Query {
    genre(id: ID!): Genre
    genres: [Genre]
  }
`;
