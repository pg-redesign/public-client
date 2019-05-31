import React from "react";
import PropTypes from "prop-types";
import { Button, Responsive, Grid } from "semantic-ui-react";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  selectedPaymentType: PropTypes.string.isRequired,
};

const PaymentSelect = props => {
  const { handleSubmit, handleSelect, selectedPaymentType } = props;

  const handleClick = value => event => {
    // sets paymentType in state then calls handleSubmit
    handleSelect(event, { name: "paymentType", value }, handleSubmit);
  };

  const baseProps = value => ({
    size: "huge",
    inverted: true,
    name: "paymentType",
    value: selectedPaymentType,
    onClick: handleClick(value),
    active: selectedPaymentType === value,
  });

  const columnProps = { mobile: 8, tablet: 8, computer: 8 };

  return (
    <Responsive>
      <Grid centered>
        <Grid.Column {...columnProps}>
          <Button fluid {...baseProps("credit")} content="Pay by Credit" />
        </Grid.Column>
        <Grid.Column {...columnProps}>
          <Button fluid {...baseProps("check")} content="Pay by Check" />
        </Grid.Column>
      </Grid>
    </Responsive>
  );
};

PaymentSelect.propTypes = propTypes;

export default PaymentSelect;
