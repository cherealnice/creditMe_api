import gql from 'graphql-tag';

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

  input ArtistInput {
    email: String!
    facebookHandle: String
    genreId: ID
    imgUrl: String
    instagramHandle: String
    name: String!
    soundcloudHandle: String
    twitterHandle: String
    website: String
  }

  extend type Query {
    artist(id: ID!): Artist
    artists: [Artist]
  }

  extend type Mutation {
    createArtist(artist: ArtistInput): Artist
    updateArtist(id: ID!, artist: ArtistInput): Artist
  }
`;
