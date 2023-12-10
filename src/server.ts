import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import path from 'node:path';

import { AppointmentsResolver } from "./resolvers/appointments-resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen();

  console.log(`Servidor rodando em ${url}`);
}

main();
