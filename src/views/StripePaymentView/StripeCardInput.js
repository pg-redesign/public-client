import React from "react";
import PropTypes from "prop-types";
import { CardElement } from "react-stripe-elements";

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

const StripeCardInput = props => {
  const { onChange } = props;

  return (
    <div
      // stripe elements require inline styles in a wrapper div
      style={{
        background: "#fff",
        borderRadius: "4px",
        padding: "9.5px 14px",
        marginBottom: "14px",
      }}
    >
      <CardElement onChange={onChange} />
    </div>
  );
};

StripeCardInput.propTypes = propTypes;

export default StripeCardInput;
