import React from "react";
import PropTypes from "prop-types";
import { Button, Responsive, Grid } from "semantic-ui-react";

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedPaymentOption: PropTypes.string.isRequired,
};

const PaymentSelect = props => {
  const { onSelect, selectedPaymentOption } = props;

  const handleClick = value => event => {
    // event, target, shouldSubmit
    onSelect(event, { name: "paymentOption", value }, true);
  };

  const baseProps = value => ({
    size: "huge",
    inverted: true,
    name: "paymentOption",
    value: selectedPaymentOption,
    onClick: handleClick(value),
  });

  const columnProps = { mobile: 8, tablet: 8, computer: 8 };

  return (
    <Responsive>
      <Grid centered>
        <Grid.Column {...columnProps}>
          <Button fluid {...baseProps("CREDIT")} content="Pay by Credit" />
        </Grid.Column>
        <Grid.Column {...columnProps}>
          {/* TODO: display "Send Invoice", add note about alternative payment
          types */}
          <Button fluid {...baseProps("INVOICE")} content="Bill by Invoice" />
        </Grid.Column>
      </Grid>
    </Responsive>
  );
};

PaymentSelect.propTypes = propTypes;

export default PaymentSelect;
