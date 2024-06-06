import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { buildSchema } from 'type-graphql';
import { AppDataSource } from './data-source';
import { GrantResolver } from './resolvers/GrantResolver';

async function startServer() {
  const app = express();

  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [GrantResolver],
  });

  const server = new ApolloServer({
    schema,
  });
  await server.start();

  app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server));

  app.listen(4000, () =>
    console.log(`Server ready at http://localhost:4000/graphql`)
  );
}

startServer();