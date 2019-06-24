import gql from 'graphql-tag';

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

  input ProjectInput {
    amazonMusicUrl: String
    appleMusicUrl: String
    artistId: String!
    imgUrl: String
    name: String!
    soundcouldUrl: String
    spotifyUrl: String
    updatedAt: String!
  }

  extend type Query {
    project(id: ID!): Project
    projects: [Project]
  }

  extend type Mutation {
    createProject(project: ProjectInput): Project
    updateProject(id: ID!, project: ProjectInput): Project
  }
`;
