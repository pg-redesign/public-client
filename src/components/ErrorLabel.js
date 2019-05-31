import React from "react";
import { Label } from "semantic-ui-react";

const ErrorLabel = props => <Label basic color="red" size="large" {...props} />;

ErrorLabel.defaultProps = {
  pointing: "right",
};

export default ErrorLabel;
