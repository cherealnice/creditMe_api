import gql from 'graphql-tag';

export default gql`
  type Role implements Node {
    createdAt: String!
    id: ID!
    name: String!
    updatedAt: String!
    users: [User]!
  }

  input RoleInput {
    name: String!
  }

  extend type Query {
    role(id: ID!): Role
    roles: [Role]
  }

  extend type Mutation {
    createRole(role: RoleInput): Role
    updateRole(id: ID!, role: RoleInput): Role
  }
`;
