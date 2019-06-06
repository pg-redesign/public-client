import React, { Component } from "react";
import PropTypes from "prop-types";
import AJV from "ajv";
import { gql } from "apollo-boost";
import {
  Form,
  Icon,
  Grid,
  Input,
  Button,
  Header,
  Divider,
  Responsive,
} from "semantic-ui-react";

import { withHandledQuery } from "../../wrappers";
import { studentTypeShape, idType } from "../../utils/prop-types";

import StripeCardInput from "./StripeCardInput";
import {
  CourseCard,
  IconMessage,
  ErrorMessage,
  LabelOrError,
} from "../../components";

// SUIR input spacing, use for spacing nearby elements
const INPUT_SPACING = "14px";

const query = gql`
  query StripePaymentForm {
    schema: getFormSchema(form: STRIPE_PAYMENT)

    courses: getCourses {
      id
      name
      price
      date
      description
      location {
        mapURL
        concatenated
      }
    }
  }
`;

class StripePaymentForm extends Component {
  static propTypes = {
    courseId: idType.isRequired,
    student: studentTypeShape.isRequired,
    stripe: PropTypes.object.isRequired,
    submitPayment: PropTypes.func.isRequired,
    data: PropTypes.shape({
      schema: PropTypes.object.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    const { student, data } = props;

    const ajv = new AJV({ allErrors: true });

    // pre-populate form with student data
    this.state = {
      errors: {},
      formValidator: ajv.compile(data.schema),
      fields: {
        lastName: student.lastName || "",
        receiptEmail: student.email || "",
        firstName: student.firstName || "",
      },
    };
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
      const errors = { ...state.errors, stripeError: false };
      // only if existing error, null does not cause re-render
      return errors.stripeError ? { errors } : null;
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
    const { courseId, student, stripe, submitPayment } = this.props;

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

    submitPayment({
      variables: {
        courseId,
        receiptEmail,
        studentId: student.id,
        tokenId: stripeResponse.token.id,
      },
    });
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
        <Header inverted as="h2" textAlign="center" content="Billing Details" />

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
            label={this.labelOrError("lastName", "Last Name")}
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

        {errors.stripeError && (
          <ErrorMessage
            size="small"
            width="100%"
            body={errors.stripeError}
            header="Unable to process your payment"
            style={{ marginBottom: INPUT_SPACING }}
          />
        )}

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

  render() {
    const { courseId, data } = this.props;

    const [course] = data.courses.filter(course => course.id === courseId);

    return (
      <>
        {/* mobile: stack short course card and form inputs */}
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Grid centered>
            <Grid.Row>
              <CourseCard.Short
                course={course}
                style={{ fontSize: "0.95em" }}
              />
            </Grid.Row>
          </Grid>

          <Divider />

          {this.renderFormInputs()}

          <Grid centered style={{ marginTop: INPUT_SPACING }}>
            {this.renderSubmitButton(course.price)}
          </Grid>
        </Responsive>

        {/* tablet+: full course card left form inputs right */}
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid container centered>
            <Grid.Column computer="6" tablet="8">
              <CourseCard fluid {...course} withButtons={false} />
            </Grid.Column>

            <Grid.Column computer="6" tablet="8">
              {this.renderFormInputs()}
            </Grid.Column>

            {/* adjust spacing on widescreen vs tablet */}
            <Grid.Row only="widescreen">
              <Divider hidden />
            </Grid.Row>

            <Grid.Row>{this.renderSubmitButton(course.price)}</Grid.Row>
          </Grid>
        </Responsive>
      </>
    );
  }
}

export default withHandledQuery(StripePaymentForm, query);
