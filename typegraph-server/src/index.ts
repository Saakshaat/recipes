require("dotenv").config();

import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { RecipeResolver } from "./resolvers/RecipeResolver";
import { buildSchema } from "type-graphql";

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({ resolvers: [RecipeResolver] });
  const server = new ApolloServer({ schema });
  server.listen(process.env.PORT);
  console.log("Server has started!");
}

main();
