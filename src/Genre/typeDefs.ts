import { gql } from 'apollo-server-express';

export default gql`
  type Genre implements Node {
    artists: [Artist!]
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
  }

  type Genres {
    nodes: [Genre]
  }

  extend type Query {
    genre(id: ID!): Genre
    genres: Genres
  }
`;
