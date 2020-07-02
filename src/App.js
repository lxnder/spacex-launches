import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Overlay from "./components/launchSelection/Overlay";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={client}>
      <Overlay />
    </ApolloProvider>
  );
};

export default App;
