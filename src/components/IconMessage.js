import React from "react";
import PropTypes from "prop-types";
import { Container, Message, Icon } from "semantic-ui-react";

const iconMessagePropTypes = {
  spinIcon: PropTypes.bool,
  iconName: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]).isRequired,
  width: PropTypes.oneOf(["25%", "30%", "40%", "50%", "60%", "75%", "100%"])
    .isRequired,
};

const IconMessage = props => {
  const {
    body,
    extra,
    width,
    header,
    spinIcon,
    iconName,
    ...messageProps
  } = props;

  return (
    <Container style={{ width }}>
      <Message {...messageProps} icon>
        {iconName && <Icon name={iconName} loading={spinIcon} />}
        <Message.Content>
          <Message.Header content={header} />
          {body}
          {extra && (
            <div>
              <br /> {extra}
            </div>
          )}
        </Message.Content>
      </Message>
    </Container>
  );
};

IconMessage.propTypes = iconMessagePropTypes;

export const LoadingMessage = props => <IconMessage {...props} />;

LoadingMessage.propTypes = iconMessagePropTypes;

LoadingMessage.defaultProps = {
  info: true,
  width: "75%",
  size: "large",
  spinIcon: true,
  iconName: "sync alternate",
  header: "Loading content...",
};

export const ErrorMessage = props => <IconMessage {...props} />;

ErrorMessage.propTypes = iconMessagePropTypes;

ErrorMessage.defaultProps = {
  width: "75%",
  size: "large",
  color: "red",
  iconName: "cancel",
  header: "An error occurred",
  body: "Try refreshing the page",
};

export const SuccessMessage = props => <IconMessage {...props} />;

SuccessMessage.propTypes = {
  ...iconMessagePropTypes,
  body: PropTypes.string.isRequired,
};

SuccessMessage.defaultProps = {
  width: "75%",
  size: "large",
  positive: true,
  header: "Success!",
  iconName: "check circle",
};

IconMessage.Error = ErrorMessage;
IconMessage.Success = SuccessMessage;
IconMessage.Loading = LoadingMessage;

export default IconMessage;
