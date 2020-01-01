import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

const { NODE_ENV, REACT_APP_API_HOST } = process.env;

const uri = `${
  NODE_ENV === "development" ? "http://" : "https://"
}${REACT_APP_API_HOST}/graphql`;

const link = new HttpLink({ uri });
const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
});
