import { gql } from 'apollo-server-express';

export default gql`
  type Role implements Node {
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
    users: [User]!
  }

  type Roles {
    nodes: [Role]
  }

  extend type Query {
    role(id: ID!): Role
    roles: Roles
  }
`;
