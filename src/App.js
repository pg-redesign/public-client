import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

import "./global.css";
import "./variables.css";

import Views from "./views";
import client from "./utils/api-client";
import { NavBar, Footer } from "./components";

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <NavBar links={Views.links.navList}>
        <Views />
      </NavBar>
      <Footer links={Views.links.footerList} />
    </Router>
  </ApolloProvider>
);

export default App;
