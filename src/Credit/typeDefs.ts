import { gql } from 'apollo-server-express';

export default gql`
  type Credit implements Node {
    createdAt: String!
    id: ID!
    project: Project!
    role: Role!
    updatedAt: String!
    user: User!
  }

  type Credits {
    nodes: [Credit]
  }

  extend type Query {
    credit(id: ID!): Credit
    credits: Credits
  }
`;
