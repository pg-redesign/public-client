import React from "react";
import PropTypes from "prop-types";
import { Container, Divider, Popup, Icon } from "semantic-ui-react";

const propTypes = {
  youtubeURL: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string.isRequired,
};

const defaultProps = {
  youtubeURL: "https://youtube.com/channel/",
  linkedinURL: "https://linkedin.com/company/princeton-groundwater",
};

const ConnectWithUs = props => {
  const { youtubeURL, linkedinURL } = props;

  return (
    <Container>
      <Divider horizontal>Connect With Us</Divider>

      <Popup
        size="tiny"
        position="left center"
        content="YouTube"
        trigger={
          <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" size="huge" color="red" />
          </a>
        }
      />

      <Popup
        size="tiny"
        position="right center"
        content="LinkedIn"
        trigger={
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size="huge" color="blue" />
          </a>
        }
      />
    </Container>
  );
};

ConnectWithUs.propTypes = propTypes;
ConnectWithUs.defaultProps = defaultProps;

export default ConnectWithUs;
