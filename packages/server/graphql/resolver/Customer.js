import customers from '../../db'
// Resolver
const Resolver = {
    Query: {
        customers: () => customers,
        customer: (_, { id }) => customers.filter(customer => customer.id === id)[0]
    }
}

export default Resolver