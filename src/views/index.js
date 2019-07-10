import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import LandingView from "./LandingView";
import RegistrationView from "./RegistrationView";
import StripePaymentView from "./StripePaymentView";
import siteLinks, { navList } from "./site-links";

const Views = () => (
  <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
    <Switch>
      <Route exact path={siteLinks.LANDING} component={LandingView} />
      <Route
        component={RegistrationView}
        // optional courseId path param, pre-selects course if present
        path={`${siteLinks.REGISTRATION}/:courseId?`}
      />
      <Route
        exact
        path={siteLinks.CREDIT_PAYMENT}
        component={StripePaymentView}
      />
      {/* all other addresses directed to home page */}
      <Route path="/" component={LandingView} />
    </Switch>
  </Container>
);

Views.links = {
  navList,
  ...siteLinks,
};

export default Views;
