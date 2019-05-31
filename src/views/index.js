import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import LandingView from "./LandingView";
import RegistrationView from "./RegistrationView";
import siteLinks, { navList, footerList } from "./site-links";

const Views = () => (
  <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
    <Switch>
      <Route exact path={siteLinks.LANDING} component={LandingView} />
      <Route
        component={RegistrationView}
        // optional courseId path param
        path={`${siteLinks.REGISTRATION}/:courseId?`}
      />
    </Switch>
  </Container>
);

Views.links = {
  navList,
  footerList,
  ...siteLinks,
};

export default Views;
