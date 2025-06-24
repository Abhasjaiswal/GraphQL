const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
        gender: String!
        city: String!
        country: Nationality! 
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        title: String!
        year: Int!
        rating: Float!
        director: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(title: String!): Movie!
    }

    enum Nationality {
        INDIAN
        AMERICAN
        BRITISH
        FRENCH
        GERMAN
    }
`

module.exports = typeDefs