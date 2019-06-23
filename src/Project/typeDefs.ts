import { gql } from 'apollo-server-express';

export default gql`
  type Project implements Node {
    amazonMusicUrl: String
    appleMusicUrl: String
    artist: Artist!
    createdAt: String!
    id: ID!
    imgUrl: String
    name: String!
    soundcouldUrl: String
    spotifyUrl: String
    updatedAt: String!
    credits: [Credit!]
  }

  type Projects {
    nodes: [Project]
  }

  extend type Query {
    project(id: ID!): Project
    projects: Projects
  }
`;
