import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './src';
import { prisma } from './src/generated/prisma-client';

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    // const me = getMe(token);

    // if (!me) throw new AuthorizationError('you must be logged in');

    return {
      prisma,
      //      me,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
