import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import ScrollToTop from "./ScrollToTop";
import siteLinks, { navList } from "./site-links";

import CourseView from "./CourseView";
import LandingView from "./LandingView";
import InstructorView from "./InstructorView";
import TestimonialView from "./TestimonialView";
import RegistrationView from "./RegistrationView";
import StripePaymentView from "./StripePaymentView";

const Views = () => (
  <ScrollToTop>
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
          component={StripePaymentView}
          path={`${siteLinks.CREDIT_PAYMENT}/:registrationCode?`}
        />

        <Route
          exact
          component={CourseView}
          path={`${siteLinks.COURSES}/:shortName`}
        />

        <Route exact component={InstructorView} path={siteLinks.INSTRUCTORS} />

        <Route
          exact
          component={TestimonialView}
          path={siteLinks.TESTIMONIALS}
        />

        {/* all other addresses directed to home page */}
        <Route path="/" component={LandingView} />
      </Switch>
    </Container>
  </ScrollToTop>
);

Views.links = {
  navList,
  ...siteLinks,
};

export default Views;
