import React from "react";
import PropTypes from "prop-types";
import { Responsive, Grid, Divider } from "semantic-ui-react";

import { CourseCard } from "../../components";
import { courseTypeShape } from "../../utils/prop-types";

const StandardStripePayment = props => {
  const { course, renderFormInputs, renderSubmitButton } = props;

  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Grid container centered>
        <Grid.Column computer="6" tablet="8" style={{ marginTop: "12px" }}>
          <CourseCard fluid {...course} withWhatsIncluded />
        </Grid.Column>

        <Grid.Column computer="6" tablet="8">
          {renderFormInputs()}
        </Grid.Column>

        {/* adjust spacing on widescreen vs tablet */}
        <Grid.Row only="widescreen">
          <Divider hidden />
        </Grid.Row>

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
