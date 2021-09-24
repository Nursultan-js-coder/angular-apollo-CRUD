const postResolver  = require("../resolvers/posts")
const userResolver = require("../resolvers/users")
const pageResolver = require("../resolvers/pages")
const employeesResolver = require("../resolvers/employees")

module.exports = {
    Query:{
        ...postResolver.Query,
        ...userResolver.Query,
        ...employeesResolver.Query,
        ...pageResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...postResolver.Mutation,
          ...pageResolver.Mutation
    },
  Subscription:{
      ...postResolver.Subscription
  }

}
