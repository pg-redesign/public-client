import React from "react";
import PropTypes from "prop-types";
import { Grid, Message } from "semantic-ui-react";

import { responsiveWrapper } from "../wrappers";
import JoinMailingList from "./JoinMailingList";

const propTypes = {
  mobile: PropTypes.bool,
  attached: PropTypes.bool,
  header: PropTypes.string,
  mobileWidth: PropTypes.string,
  standardWidth: PropTypes.string,
};

const defaultProps = {
  mobile: false,
  attached: false,
  mobileWidth: "100%",
  standardWidth: "100%",
  header: "Sorry, there are no upcoming courses to register for at this time.",
};

const NoCourseMessage = props => (
  <Message compact color="blue" attached="top">
    <Message.Header content={props.header} />
    <Message.Content style={{ textAlign: "left" }}>
      Join our mailing list and we will update you as soon as the next course
      opens for registration.
    </Message.Content>
  </Message>
);

const NoCourseAvailable = props => {
  const { mobile, mobileWidth, standardWidth, attached, header } = props;

  const joinMailingListProps = {
    mobile,
    mobileWidth,
    standardWidth,
  };

  return (
    <Grid centered>
      {attached ? (
        // (compact) attaches the message to the subscribe container
        <Grid.Row>
          <NoCourseMessage header={header} attached="top" />
          <JoinMailingList attached="bottom" {...joinMailingListProps} />
        </Grid.Row>
      ) : (
        // (open) separates the two for more negative space
        <>
          <Grid.Row>
            <NoCourseMessage header={header} />
          </Grid.Row>
          <Grid.Row>
            <JoinMailingList {...joinMailingListProps} />
          </Grid.Row>
        </>
      )}
    </Grid>
  );
};

NoCourseAvailable.propTypes = propTypes;
NoCourseAvailable.defaultProps = defaultProps;
export default responsiveWrapper(NoCourseAvailable);
