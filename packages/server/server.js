import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/scheme/customer'

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Server Ready at ${url}`)
})