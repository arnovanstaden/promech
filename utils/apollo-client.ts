import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://quufujjm.api.sanity.io/v1/graphql/production/default' }),
  cache: new InMemoryCache()
});
