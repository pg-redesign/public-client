import React from "react";
import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";

import { JoinMailingList, ConnectWithUs } from ".";

const SubscribeAndConnect = props => {
  const { mobile, mobileWidth, standardWidth } = props;
  const style = { width: mobile ? mobileWidth : standardWidth };

  return (
    <Segment style={style}>
      <JoinMailingList mobile={mobile} />
      <ConnectWithUs />
    </Segment>
  );
};

SubscribeAndConnect.propTypes = {
  mobileWidth: PropTypes.string,
  standardWidth: PropTypes.string,
  mobile: PropTypes.bool.isRequired,
};

SubscribeAndConnect.defaultProps = {
  mobileWidth: "90%",
  standardWidth: "40%",
};

export default SubscribeAndConnect;
