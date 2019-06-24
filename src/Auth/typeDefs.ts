import gql from 'graphql-tag';

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
