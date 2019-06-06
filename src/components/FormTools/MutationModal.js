import React from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";

import { ErrorMessage, LoadingMessage, SuccessMessage } from "..";

const propTypes = {
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
  const { loading, error, data, messageProps } = props;

  const baseMessageProps = { width: "100%", size: "large" };

  const content = data ? (
    <SuccessMessage {...baseMessageProps} {...messageProps.success(data)} />
  ) : error ? (
    <ErrorMessage {...baseMessageProps} {...messageProps.error(error)} />
  ) : (
    <LoadingMessage {...baseMessageProps} {...messageProps.loading(loading)} />
  );

  return (
    <Modal open={loading || Boolean(error) || Boolean(data)} size="tiny">
      <Modal.Content>{content}</Modal.Content>
    </Modal>
  );
};

MutationModal.propTypes = propTypes;

export default MutationModal;
