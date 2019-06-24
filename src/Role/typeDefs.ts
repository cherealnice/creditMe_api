import { gql } from 'apollo-server-express';

export default gql`
  type Role implements Node {
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
    users: [User]!
  }

  extend type Query {
    role(id: ID!): Role
    roles: [Role]
  }
`;
