import { gql } from 'apollo-server'

const typeDefs = gql`
    type Customer {
        id: Int
        name: String
        email: String
        age: Int
    }
    type Query {
        customers: [Customer]
        customer: Customer
    }
`

export default typeDefs
