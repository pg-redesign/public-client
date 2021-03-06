import React, { Component } from "react";
import PropTypes from "prop-types";
import AJV from "ajv";
import { Form, Icon, Input, Button, Header, Divider } from "semantic-ui-react";

import { courseTypeShape, studentTypeShape } from "../../utils/prop-types";

import StripeCardInput from "./StripeCardInput";
import MobileStripePayment from "./MobileStripePayment";
import StandardStripePayment from "./StandardStripePayment";
import { IconMessage, ErrorMessage, LabelOrError } from "../../components";

// SUIR input spacing, use for consistent spacing with nearby elements
export const INPUT_SPACING = "14px";

class StripePaymentForm extends Component {
  static propTypes = {
    course: courseTypeShape.isRequired,
    stripe: PropTypes.object.isRequired,
    student: studentTypeShape.isRequired,
    formSchema: PropTypes.object.isRequired,
    submitPayment: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { student, formSchema } = props;

    const ajv = new AJV({ allErrors: true });

    // pre-populate form with student data
    this.state = {
      errors: {},
      formValidator: ajv.compile(formSchema),
      fields: {
        lastName: student.lastName || "",
        receiptEmail: student.email || "",
        firstName: student.firstName || "",
      },
    };
  }

  render() {
    const { course } = this.props;

    return (
      <div>
        <Header inverted as="h1" textAlign="center" content="Payment" />

        <Divider />

        {/* mobile: stacks short course card and form inputs */}
        <MobileStripePayment
          course={course}
          renderFormInputs={this.renderFormInputs}
          renderSubmitButton={this.renderSubmitButton}
        />

        {/* tablet+: full course card left form inputs right */}
        <StandardStripePayment
          course={course}
          renderFormInputs={this.renderFormInputs}
          renderSubmitButton={this.renderSubmitButton}
        />
      </div>
    );
  }

  handleChange = (_, target) =>
    this.setState(state => {
      const { name, value } = target;

      return {
        fields: { ...state.fields, [name]: value },
        errors: { ...state.errors, [name]: false },
      };
    });

  handleStripeCardChange = () =>
    // clear stripe errors as user corrects the input
    this.setState(state => {
      const { stripeError } = state.errors;

      const errors = { ...state.errors, stripeError: false };
      // only if existing error, null does not cause re-render
      return stripeError ? { errors } : null;
    });

  handleFormErrors = validationErrors => {
    const errors = validationErrors.reduce((errors, error) => {
      // AJV has each field name as dataPath: ".fieldName"
      const name = error.dataPath.replace(".", "");

      return { ...errors, [name]: true };
    }, {});

    this.setState({ errors });
  };

  handleStripeError = stripeError =>
    this.setState(state => {
      return { errors: { ...state.errors, stripeError } };
    });

  handleSubmit = async () => {
    const { fields, formValidator } = this.state;
    const { stripe, course, student, submitPayment } = this.props;

    const isValid = formValidator(fields);
    if (!isValid) {
      return this.handleFormErrors(formValidator.errors);
    }

    const { firstName, lastName, receiptEmail } = fields;

    const stripeResponse = await stripe.createToken({
      name: `${firstName} ${lastName}`,
    });

    if (stripeResponse.error) {
      const { error } = stripeResponse;
      return this.handleStripeError(error.message);
    }

    const paymentData = {
      receiptEmail,
      courseId: course.id,
      studentId: student.id,
      tokenId: stripeResponse.token.id,
    };

    submitPayment({ variables: { paymentData } }).catch(console.error);
  };

  labelOrError = (fieldName, labelText) => (
    <LabelOrError
      fieldName={fieldName}
      labelText={labelText}
      errors={this.state.errors}
    />
  );

  renderFormInputs = () => {
    const { fields, errors } = this.state;

    return (
      <Form>
        <Form.Field>
          <Input
            name="firstName"
            value={fields.firstName}
            onChange={this.handleChange}
            label={this.labelOrError("firstName", "First Name")}
          />
        </Form.Field>

        <Form.Field>
          <Input
            inverted
            name="lastName"
            value={fields.lastName}
            onChange={this.handleChange}
            label={this.labelOrError("lastName", "Last Name ")}
          />
        </Form.Field>

        <Form.Field width="16">
          <Input
            name="receiptEmail"
            value={fields.receiptEmail}
            onChange={this.handleChange}
            label={this.labelOrError("receiptEmail", "Receipt Email")}
          />
        </Form.Field>

        {/* credit card info, from Stripe */}
        <Form.Field>
          <StripeCardInput onChange={this.handleStripeCardChange} />
        </Form.Field>

        {errors.stripeError ? (
          <ErrorMessage
            size="small"
            width="100%"
            body={errors.stripeError}
            header="Unable to process your payment"
            style={{ marginBottom: INPUT_SPACING }}
          />
        ) : (
          <IconMessage
            width="100%"
            size="small"
            color="violet"
            header={
              <div style={{ textAlign: "center" }}>
                Card processing secured by{" "}
                <Icon name="stripe card" size="large" fitted />
              </div>
            }
            body={
              <p style={{ textAlign: "center" }}>
                Card details are never stored on our servers.
              </p>
            }
          />
        )}
      </Form>
    );
  };

  renderSubmitButton = coursePrice => (
    <Button
      inverted
      size="big"
      type="submit"
      onClick={this.handleSubmit}
      content={`Submit Payment: $${coursePrice} USD`}
    />
  );
}

export default StripePaymentForm;
