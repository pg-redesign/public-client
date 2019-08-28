import React from "react";
import PropTypes from "prop-types";
import { Grid, Message } from "semantic-ui-react";

const UnderConstruction = props => {
  const { mobile } = props;

  return (
    <Grid centered>
      <Message
        warning
        icon="warning sign"
        size={mobile ? "small" : "large"}
        content="Please check back later!"
        header="This page is under construction"
        style={{ width: mobile ? "80%" : "50%" }}
      />
    </Grid>
  );
};

UnderConstruction.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default UnderConstruction;
