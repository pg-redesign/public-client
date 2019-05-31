import React from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";

import { ErrorMessage, LoadingMessage } from "../../components/IconMessage";

const propTypes = {
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};

const SubmissionModal = props => {
  const { errorMessage, isOpen, isLoading } = props;

  return (
    <Modal open={isOpen} size="tiny">
      <Modal.Content>
        {errorMessage && (
          <ErrorMessage width="100%" size="large" body={errorMessage} />
        )}
        {isLoading && (
          <LoadingMessage
            width="100%"
            size="large"
            iconName="sync alternate"
            header="Submitting course registration"
          />
        )}
      </Modal.Content>
    </Modal>
  );
};

SubmissionModal.propTypes = propTypes;

export default SubmissionModal;
