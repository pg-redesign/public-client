import React from "react";
import { Grid, Message } from "semantic-ui-react";

import { responsiveWrapper } from "../../wrappers";
import { SubscribeAndConnect } from "../../components";

const NoCourses = props => {
  const textAlignStyle = { textAlign: props.mobile ? "left" : "center" };

  return (
    <Grid centered>
      <Grid.Row>
        <Message compact color="blue">
          <Message.Header>
            Sorry, there are no upcoming courses to register for at this time.
          </Message.Header>
          <Message.Content style={textAlignStyle}>
            Join our mailing list and we will update you as soon as the next
            course opens for registration.
          </Message.Content>
        </Message>
      </Grid.Row>
      <Grid.Row>
        <SubscribeAndConnect mobile={props.mobile} mobileWidth="100%" />
      </Grid.Row>
    </Grid>
  );
};

export default responsiveWrapper(NoCourses);
