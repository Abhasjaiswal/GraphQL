const users = require('../mockData/users')

const resolvers = {
    Query: { 
        users: () => {
            return users
        }
    }
}

module.exports = resolvers