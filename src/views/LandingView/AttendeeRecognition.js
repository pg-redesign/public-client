import React from "react";
import { Grid, Header } from "semantic-ui-react";

import CompanyAndAgencyLogos from "./CompanyAndAgencyLogos";

const AttendeeRecognition = () => (
  <Grid centered container>
    <Grid.Row verticalAlign="top">
      <Header
        as="h2"
        inverted
        content="Over 25,000 professionals taught since 1974"
      />
      <Header
        as="h3"
        inverted
        style={{ marginTop: "0px" }}
        content="including international attendees from leading companies and government agencies"
      />
    </Grid.Row>
    <Grid.Row>
      <CompanyAndAgencyLogos />
    </Grid.Row>
  </Grid>
);

export default AttendeeRecognition;
