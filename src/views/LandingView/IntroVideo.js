import React from "react";
import PropTypes from "prop-types";
import { Embed } from "semantic-ui-react";

const IntroVideo = props => (
  <Embed defaultActive autoplay={false} source="youtube" id={props.videoId} />
);

IntroVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

IntroVideo.defaultProps = {
  videoId: "6w4Ji-oqiQo",
};

export default IntroVideo;
