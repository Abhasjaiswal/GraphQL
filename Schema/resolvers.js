const users = require('../mockData/users')
const movies = require('../mockData/movies')
const _ = require('lodash')
const resolvers = {
    Query: { 
        users: () => {
            return users
        },
        user: (parent,args)=>{
            const id = args.id
            const user = _.find(users,{id: Number(id)})
            return user
        },
        movies: () => {
            return movies
        },
        movie: (parent,args)=>{
            const title = args.title
            const movie = _.find(movies,{title})
            return movie
        }
    },

    User: {
        favoriteMovies: () => {
          return _.filter(
            movies,
            (movie) =>
              movie.year >= 2000 && movie.year <= 2010
          );    
        },
    },

    Mutation: {
        createUser: (parent,args)=>{
            const user = args.input
            const lastId = users[users.length - 1].id
            user.id = lastId + 1
            users.push(user)
            return user
        },
        updateUserEmail: (parent,args)=>{
            const {id, email} = args.input
            const user = _.find(users,{id: Number(id)})
            user.email = email
            return user
        },
        deleteUser: (parent,args)=>{
            const {id} = args.id
            _.remove(users,{id: Number(id)})
            return null
            
        }
    }
}

module.exports = resolvers