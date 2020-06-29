import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={client}>
      <div></div>
    </ApolloProvider>
  );
};

export default App;
