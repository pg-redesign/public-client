import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

import "./global.css";

import Views from "./views";
import { NavBar } from "./components";
import client from "./utils/api-client";

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <NavBar links={Views.links.navList}>
        <Views />
      </NavBar>
    </Router>
  </ApolloProvider>
);

export default App;
