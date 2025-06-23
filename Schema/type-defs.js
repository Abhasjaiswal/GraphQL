const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
        gender: String!
        city: String!
        country: String!
    }

    type Query {
        users: [User!]!
    }
`

module.exports = typeDefs