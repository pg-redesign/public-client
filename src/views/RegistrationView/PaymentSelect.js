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

  const columnProps = { mobile: 16, tablet: 8, computer: 8 };

  return (
    <Responsive>
      <Grid centered container>
        <Grid.Column {...columnProps}>
          <Button
            fluid
            {...baseProps("CREDIT")}
            content="Credit Card Payment"
          />
        </Grid.Column>
        <Grid.Column {...columnProps}>
          <Button
            fluid
            {...baseProps("INVOICE")}
            content="Email Me Other Options"
          />
        </Grid.Column>
      </Grid>
    </Responsive>
  );
};

PaymentSelect.propTypes = propTypes;

export default PaymentSelect;
