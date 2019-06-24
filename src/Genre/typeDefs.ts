import gql from 'graphql-tag';

export default gql`
  type Genre implements Node {
    artists: [Artist!]
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
  }

  input GenreInput {
    name: String!
  }

  extend type Query {
    genre(id: ID!): Genre
    genres: [Genre]
  }

  extend type Mutation {
    createGenre(genre: GenreInput): Genre
    updateGenre(id: ID!, genre: GenreInput): Genre
  }
`;
