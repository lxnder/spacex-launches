import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Overlay from "./components/overlay/Overlay";

// TODO: Make launches, name filter and actions global
const App = () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_API_URI || "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={client}>
      <Overlay />
      <div className="w-screen h-screen gradient-bg" />
    </ApolloProvider>
  );
};

export default App;
