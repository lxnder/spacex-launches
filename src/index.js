import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";

require("dotenv").config();

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API_URI || "https://api.spacex.land/graphql/",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
