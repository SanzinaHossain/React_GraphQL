import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
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
const typeDefs = `
type Query
{
  getUsers: [User]
  getUserById(id:ID!):User
}

type Mutation
{
 createUser(name:String!, age :Int! , isMarried: Boolean!): User
}

type User
{
    id: ID
    name:String
    age: Int
    isMarried: Boolean
}
`
const resolvers = {
  Query: {
    getUsers: () => {
      return users;
      // if user want to fetch data from database like mongodb just write the collection format to fetch all the users from database
    },
    getUserById: () => {
      return users.find((user)=>user.id===id)
    }
  },
  Mutation: {
    
  }
}

// Create the Apollo Server instance
const server = new ApolloServer({typeDefs,resolvers });

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`Congratulation !!! GraphQL server is ready to work at ${url}`);

