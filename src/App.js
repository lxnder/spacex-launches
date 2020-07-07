import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import LaunchInfo from "./components/launchInfo/LaunchInfo";
import LaunchList from "./components/overlay/LaunchList";
import { useStore } from "./stores/global";
import DynamicButtonFilter from "./components/overlay/DynamicButtonFilter";
import { AnimatePresence } from "framer-motion";

// TODO: Make launches, name filter and actions global
const App = () => {
  const client = new ApolloClient({
    uri: process.env.GRAPHQL_API_URI || "https://api.spacex.land/graphql/",
  });

  const { overlayIsActive } = useStore();

  return (
    <ApolloProvider client={client}>
      <DynamicButtonFilter />
      <AnimatePresence>
        {overlayIsActive ? <LaunchList /> : <LaunchInfo />}
      </AnimatePresence>
      <div className="w-screen h-screen gradient-bg absolute top-0 left-0 z-0" />
    </ApolloProvider>
  );
};

export default App;
