import gql from 'graphql-tag';

export default gql`
  type Credit implements Node {
    createdAt: String!
    id: ID!
    project: Project!
    role: Role!
    updatedAt: String!
    user: User!
  }

  input CreditInput {
    projectId: String!
    roleId: String!
  }

  extend type Query {
    credit(id: ID!): Credit
    credits: [Credit]
  }

  extend type Mutation {
    createCredit(credit: CreditInput): Credit
    updateCredit(id: ID!, credit: CreditInput): Credit
  }
`;
