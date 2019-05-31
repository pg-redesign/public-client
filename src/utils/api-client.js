import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: process.env.REACT_APP_API_URI });

export default new ApolloClient({
  link,
  cache,
});
