const gql = require("graphql-tag");
const typeDefs = gql`
    type Page{
      name:String!,
      children:[Page]!,
      title:String,
      description:String
    }
    type Employee{
      name:String!,
      position:String!,
      level:String!
    }
    type Post{
        title:String!
        content:String!
        date:String!
        id:String
    }
    type Query{
        getPosts:[Post]
        getPost(id:ID!):Post!
        getUsers:[User]
        getPages:[Page],
        getEmployees:[Employee]
    }
    type User{
        id:ID!
        email:String!
        token:String
        username:String!
        createdAt:String!
    }
    input RegisterInput{
        username:String!
        email:String!
        password:String!
    }
    type Mutation{
        register(registerInput:RegisterInput):User!
        login(email:String!,password:String!):User!
        createPost(title:String!,content:String!,date:String!):Post!
        deletePost(id:ID!):Post!
        addPage(name:String!,description:String,children:String):Page!
    }
    type Subscription {
      postCreated: Post
    }
    subscription PostFeed {
      postCreated {
        content
        title
      }
    }


`;
module.exports = typeDefs;
