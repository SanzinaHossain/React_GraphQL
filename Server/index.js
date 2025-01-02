import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
type Query
{
 _empty: String
}

type Mutation
{
 _empty: String
}

type users
{
    id: ID
    name:String
    age: Int
    isMarried: Boolean
}
`

const users = [
  {
    id: 1,
    name: 'Shorna',
    age: 25,
    isMarried:true
  },
   {
    id: 2,
    name: 'Sanzina',
    age: 25,
    isMarried:false
  },
    {
    id: 3,
    name: 'Hossain',
    age: 25,
    isMarried:true
  }

]
const resolvers = {
  
}

// Create the Apollo Server instance
const server = new ApolloServer({typeDefs,resolvers });

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`Congratulation !!! GraphQL server is ready to work at ${url}`);

