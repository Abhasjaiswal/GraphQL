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
    }
}

module.exports = resolvers