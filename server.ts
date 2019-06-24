import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import * as jwt from 'jsonwebtoken';
import { resolvers, typeDefs, permissions } from './src';
import { prisma } from './src/generated/prisma-client';

require('dotenv').config();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const schemaWithMiddleware = applyMiddleware(schema, permissions);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    let user;
    let me;

    if (token) {
      try {
        user = jwt.verify(
          token,
          process.env.JWT_PRIVATE_KEY,
        );
      } catch (e) {
        // console.error(e);
      }
    }

    if (user) {
      me = await prisma.user({ id: user.userId });
    }

    return {
      prisma,
      me,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
