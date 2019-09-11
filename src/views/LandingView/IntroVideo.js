import React from "react";
import PropTypes from "prop-types";
import { Embed } from "semantic-ui-react";

const IntroVideo = props => (
  <Embed
    defaultActive
    source="youtube"
    iframe={{ allowFullScreen: true }}
    url={`https://www.youtube.com/embed/${props.videoId}?autohide=true&amp;autoplay=false&amp;color=%23444444&amp;hq=true&amp;jsapi=false&amp;modestbranding=false&amp;rel=0`}
  />
);

IntroVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

IntroVideo.defaultProps = {
  videoId: "5pQL_Zjhyt8",
};

export default IntroVideo;
