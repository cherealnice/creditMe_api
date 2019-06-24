import gql from 'graphql-tag';
import * as merge from 'deepmerge';
import { GraphQLScalarType } from 'graphql';
import Auth from './Auth';
import Artist from './Artist';
import Credit from './Credit';
import Genre from './Genre';
import Project from './Project';
import Role from './Role';
import User from './User';

const anyObjectType = new GraphQLScalarType({
  name: 'AnyObject',
  serialize(value) {
    return value;
  },
});

export const rootTypeDefs = gql`
  scalar AnyObject
  type Query
  type Mutation
  interface Node {
    id: ID!
  }
`;

const rootResolvers = {
  Node: {
    __resolveType: (obj: { __typename: string }) => obj.__typename,
  },
  AnyObject: anyObjectType,
};

export const typeDefs = [
  rootTypeDefs,
  Auth.typeDefs,
  Artist.typeDefs,
  Credit.typeDefs,
  Genre.typeDefs,
  Project.typeDefs,
  Role.typeDefs,
  User.typeDefs,
];

export const resolvers = [
  rootResolvers,
  Auth.resolvers,
  Artist.resolvers,
  Credit.resolvers,
  Genre.resolvers,
  Project.resolvers,
  Role.resolvers,
  User.resolvers,
];

export const permissions = merge.all<any>([
  Auth.permissions,
  Artist.permissions,
  Credit.permissions,
  Genre.permissions,
  Project.permissions,
  Role.permissions,
  User.permissions,
]);
