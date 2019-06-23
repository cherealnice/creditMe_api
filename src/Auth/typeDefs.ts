import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    signup(email: String!, password: String!, fName: String!, lName: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    token: String!
    user: User!
    fName: String!
    lName: String!
  }
`;
