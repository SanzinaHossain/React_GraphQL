import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
type Query
{

}

type Mutation
{

}

type users
{
    id: ID
    name:String
    age: Int
    isMarried: Boolean
}

`
const resolvers = {
  
}

// Create the Apollo Server instance
const server = new ApolloServer({typeDefs,resolvers });

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`Congratulation !!! GraphQL server is ready to work at ${url}`);

