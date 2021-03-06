import React from "react";
import { Grid, Divider } from "semantic-ui-react";

import responsiveWrapper from "../../wrappers/responsiveWrapper";

import Banner from "./Banner";
import IntroVideo from "./IntroVideo";
import UpcomingCourses from "./UpcomingCourses";
import ValuePropositions from "./ValuePropositions";
import { SubscribeAndConnect } from "../../components";
import AttendeeRecognition from "./AttendeeRecognition";

const LandingView = props => {
  const { mobile } = props;

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Banner mobile={mobile} />
        </Grid.Column>
      </Grid.Row>

      <Divider section />

      {mobile ? (
        <>
          {/* MOBILE-TABLET: video + value props */}
          <Grid.Row columns="equal" only="mobile tablet">
            <Grid.Column tablet="10" mobile="16">
              <IntroVideo />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="mobile tablet">
            <Grid.Column tablet="16" mobile="14">
              <ValuePropositions />
            </Grid.Column>
          </Grid.Row>
        </>
      ) : (
        <>
          {/* DESKTOP+: video + value props */}
          <Grid.Row columns="equal" only="computer">
            <Grid.Column width="6" verticalAlign="middle">
              <IntroVideo />
            </Grid.Column>
            <Grid.Column width="10">
              <ValuePropositions />
            </Grid.Column>
          </Grid.Row>
        </>
      )}

      <Grid.Row>
        <Grid.Column computer="16" tablet="16" mobile="15">
          <UpcomingCourses />
        </Grid.Column>
      </Grid.Row>

      <Divider />

      <Grid.Row>
        <AttendeeRecognition />
      </Grid.Row>

      <Divider />

      <Grid.Row>
        <SubscribeAndConnect mobile={mobile} />
      </Grid.Row>
    </Grid>
  );
};

export default responsiveWrapper(LandingView);
