const {ApolloServer} = require("apollo-server");
const { PubSub }  = require('graphql-subscriptions');
const config = require("config");
const mongoose = require("mongoose");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs")

const pubsub  = new PubSub();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req,pubsub})
})


// mongoose config
mongoose.Promise = global.Promise;
mongoose
    .connect(config.get("mongoDbURI"), {
        useNewUrlParser: true,
    })
    .then(
        () => {
            console.log("Database connected sucessfully !");
        },
        (error) => {
            console.log("Database could not be connected : " + error);
        }
    ).then(()=>{
  server.listen({port:5000})
        .then((res)=>{
            console.log(`server is running at port :${res.url}`)
        } );})


