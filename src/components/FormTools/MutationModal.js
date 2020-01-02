import React from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";

import { responsiveWrapper } from "../../wrappers";
import { ErrorMessage, LoadingMessage, SuccessMessage } from "../IconMessage";

const shapeError = error => {
  const cleanedMessage = error.message.replace("GraphQL error: ", "").trim();
  const message =
    cleanedMessage === "Internal Server Error"
      ? "Something went wrong. Our team has been alerted and is working on a solution."
      : cleanedMessage;

  return { errors: error.graphQLErrors, message };
};

const propTypes = {
  mobile: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool,
  messageProps: PropTypes.shape({
    /** receives error object, return { header, body, extra } <ErrorMessage> props */
    error: PropTypes.func.isRequired,
    /** receives loading bool, return { header, body, extra } <LoadingMessage> props */
    loading: PropTypes.func.isRequired,
    /** receives data object, return { header, body, extra } <SuccessMessage> props */
    success: PropTypes.func.isRequired,
  }),
};

/**
 * Opens a modal when a mutation request is initiated
 * - messageProps requires 3 functions that return the props for their respective IconMessage type
 *  - error: error -> { header, body, extra } applied to <ErrorMessage>
 *  - success: data -> { header, body, extra } applied to <SuccessMessage>
 *  - loading: loading -> { header, body, extra } applied to <LoadingMessage>
 */
const MutationModal = props => {
  const { mobile, called, loading, error, data, messageProps } = props;

  // if mutation hasnt been called yet do not render anything
  if (!called) return null;

  const baseMessageProps = { width: "100%", size: mobile ? "small" : "large" };

  const content = data ? (
    <SuccessMessage {...baseMessageProps} {...messageProps.success(data)} />
  ) : error ? (
    <ErrorMessage
      {...baseMessageProps}
      {...messageProps.error(shapeError(error))}
    />
  ) : (
    <LoadingMessage {...baseMessageProps} {...messageProps.loading(loading)} />
  );

  return (
    <Modal
      size={mobile ? "tiny" : "small"}
      open={loading || Boolean(error) || Boolean(data)}
    >
      <Modal.Content>{content}</Modal.Content>
    </Modal>
  );
};

MutationModal.propTypes = propTypes;

export default responsiveWrapper(MutationModal);
