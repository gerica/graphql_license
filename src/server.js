import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { buildFederatedSchema } from '@apollo/federation';
import config from './config/config.js';
import logger from './utils/logger.js';
import resolvers from './graphql/resolvers/index.js';

const { PORT, PATH_GRAPHQL } = config;

const temp = importSchema('**/*.gql');
const typeDefs = gql(temp);

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

// The `listen` method launches a web server.
server.listen({ port: PORT, path: PATH_GRAPHQL }).then(({ url }) => {
  logger.info(url, 'Running a GraphQL API server at');
});
