import React from "react";
import PropTypes from "prop-types";
import { Button, Responsive, Grid } from "semantic-ui-react";

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedPaymentType: PropTypes.string.isRequired,
};

const PaymentSelect = props => {
  const { onSelect, selectedPaymentType } = props;

  const handleClick = value => event => {
    // event, target, shouldSubmit
    onSelect(event, { name: "paymentType", value }, true);
  };

  const baseProps = value => ({
    size: "huge",
    inverted: true,
    name: "paymentType",
    value: selectedPaymentType,
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
          <Button fluid {...baseProps("CHECK")} content="Pay by Check" />
        </Grid.Column>
      </Grid>
    </Responsive>
  );
};

PaymentSelect.propTypes = propTypes;

export default PaymentSelect;
