import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Overlay from "./components/launchSelection/Overlay";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });

  const cssStyle = {
    background:
      "linear-gradient(10deg, rgba(194,194,194,1) 0%, rgba(230,230,230,1) 33%, rgba(255,255,255,1) 100%)",
  };

  return (
    <ApolloProvider client={client}>
      <Overlay />
      <div className="w-screen h-screen" style={cssStyle} />
    </ApolloProvider>
  );
};

export default App;
