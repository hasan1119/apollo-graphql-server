const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server).then(({ url }) => {
  console.log("server is running on " + url);
});
