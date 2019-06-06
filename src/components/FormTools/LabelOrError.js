import React from "react";
import PropTypes from "prop-types";
import { Label } from "semantic-ui-react";

export const ErrorLabel = props => (
  <Label basic color="red" size="large" {...props} />
);

ErrorLabel.defaultProps = {
  pointing: "right",
};

const LabelOrError = props => {
  const { fieldName, labelText, errors } = props;
  const error = errors[fieldName];

  return error ? (
    <ErrorLabel content={`Invalid ${labelText}`} />
  ) : (
    <Label basic content={labelText} />
  );
};

LabelOrError.propTypes = {
  fieldName: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

LabelOrError.defaultProps = {
  errors: {}, // prevent access error if not provided
};

LabelOrError.ErrorLabel = ErrorLabel;
export default LabelOrError;
