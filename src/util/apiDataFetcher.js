import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { mainStoreData } from "./graphQlSchemas";
//import { allMainStoreData } from "./graphQlSchemas";

export const apiDataFetch = () => {
  return;
};
export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
