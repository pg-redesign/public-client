import React from "react";
import PropTypes from "prop-types";
import { Responsive, Grid, Divider } from "semantic-ui-react";

import { CourseCardShort } from "../../components";
import { INPUT_SPACING } from "./StripePaymentForm";
import { courseTypeShape } from "../../utils/prop-types";

const MobileStripePayment = props => {
  const { course, renderFormInputs, renderSubmitButton } = props;

  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Grid centered>
        <Grid.Row>
          <CourseCardShort course={course} style={{ fontSize: "0.95em" }} />
        </Grid.Row>
      </Grid>

      <Divider />

      {renderFormInputs()}

      <Grid centered style={{ marginTop: INPUT_SPACING }}>
        {renderSubmitButton(course.price)}
      </Grid>
    </Responsive>
  );
};

MobileStripePayment.propTypes = {
  course: courseTypeShape.isRequired,
  renderFormInputs: PropTypes.func.isRequired,
  renderSubmitButton: PropTypes.func.isRequired,
};

export default MobileStripePayment;
