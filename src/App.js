import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import LaunchSelector from "./components/launchSelection/LaunchSelector";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={client}>
      <LaunchSelector />
    </ApolloProvider>
  );
};

export default App;
