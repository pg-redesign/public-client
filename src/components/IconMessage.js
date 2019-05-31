import React from "react";
import PropTypes from "prop-types";
import { Container, Message, Icon } from "semantic-ui-react";

const iconMessagePropTypes = {
  body: PropTypes.string,
  info: PropTypes.bool,
  spinIcon: PropTypes.bool,
  positive: PropTypes.bool,
  negative: PropTypes.bool,
  header: PropTypes.string.isRequired,
  width: PropTypes.oneOf(["20%", "25%", "30%", "50%", "60%", "75%", "100%"])
    .isRequired,
};

const IconMessage = props => {
  const {
    size,
    width,
    info,
    negative,
    positive,
    header,
    body,
    spinIcon,
    iconName,
  } = props;
  const messageType = { info, negative, positive };

  return (
    <Container style={{ width }}>
      <Message {...messageType} icon size={size}>
        <Icon name={iconName} loading={spinIcon} />
        <Message.Content>
          <Message.Header content={header} />
          {body}
        </Message.Content>
      </Message>
    </Container>
  );
};

IconMessage.propTypes = iconMessagePropTypes;

export const LoadingMessage = props => <IconMessage {...props} />;

LoadingMessage.defaultProps = {
  info: true,
  width: "25%",
  size: "small",
  spinIcon: true,
  iconName: "circle notched",
  header: "Loading content...",
};

export const ErrorMessage = props => <IconMessage {...props} />;

ErrorMessage.defaultProps = {
  width: "25%",
  size: "small",
  iconName: "bug",
  negative: true,
  header: "An error occurred",
  body: "Try refreshing the page",
};

IconMessage.Loading = LoadingMessage;
IconMessage.Error = ErrorMessage;

export default IconMessage;
