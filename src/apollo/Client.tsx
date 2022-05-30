import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  ApolloLink,
  gql,
  createHttpLink,
} from "@apollo/client";
import { AUTH_TYPE, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import awsmobile from "../aws-exports";

const url = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;
const auth = {
  type: awsmobile.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: awsmobile.aws_appsync_apiKey,
};

const httpLink = createHttpLink({
  uri: url,
});

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const Client: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
