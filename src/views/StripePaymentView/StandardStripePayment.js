import React from "react";
import PropTypes from "prop-types";
import { Responsive, Grid } from "semantic-ui-react";

import { INPUT_SPACING } from "./StripePaymentForm";
import { courseTypeShape } from "../../utils/prop-types";

import { CourseCard } from "../../components";

const StandardStripePayment = props => {
  const { course, renderFormInputs, renderSubmitButton } = props;

  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Grid container centered>
        <Grid.Column
          computer="6"
          tablet="8"
          style={{ marginTop: INPUT_SPACING }}
        >
          <CourseCard fluid {...course} withWhatsIncluded />
        </Grid.Column>

        <Grid.Column computer="6" tablet="8">
          {renderFormInputs()}
        </Grid.Column>

        <Grid.Row>{renderSubmitButton(course.price)}</Grid.Row>
      </Grid>
    </Responsive>
  );
};

StandardStripePayment.propTypes = {
  course: courseTypeShape.isRequired,
  renderFormInputs: PropTypes.func.isRequired,
  renderSubmitButton: PropTypes.func.isRequired,
};

export default StandardStripePayment;
