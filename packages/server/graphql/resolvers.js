import CustomerResolver from './resolver/Customer'

export const resolvers = { 
    Query: {
        ...CustomerResolver.Query
    }
}

export default resolvers