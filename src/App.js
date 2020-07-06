import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Overlay from "./components/overlay/Overlay";
import { useStore } from "./stores/global";

// TODO: Make launches, name filter and actions global
const App = () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_API_URI || "https://api.spacex.land/graphql/",
  });

  const { overlayIsActive } = useStore();

  // const style = {
  //   backgroundImage: 'url("./assets/all_ships.png")',
  // };

  return (
    <ApolloProvider client={client}>
      <Overlay />
      {/* {!overlayIsActive && (
        <div className="flex flex-col z-10 absolute w-screen h-screen justify-center items-center">
          <div
            className="mb-48 w-6/12 h-full bg-center bg-no-repeat bg-contain"
            style={style}
          />
        </div>
      )} */}
      <div className="w-screen h-screen gradient-bg absolute top-0 left-0" />
    </ApolloProvider>
  );
};

export default App;
