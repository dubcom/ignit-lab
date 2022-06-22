import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "https://api-sa-east-1.graphcms.com/v2/cl4pm44o726ev01xlapjhd1b8/master",
  cache: new InMemoryCache(),
});