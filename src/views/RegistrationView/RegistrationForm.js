import React, { Component } from "react";
import PropTypes from "prop-types";
import AJV from "ajv";
import { gql } from "apollo-boost";
import {
  Form,
  Icon,
  Grid,
  Input,
  Label,
  Header,
  Divider,
  Container,
} from "semantic-ui-react";

import "./style-overrides.css";
import { withHandledQuery } from "../../wrappers";

import CourseSelect from "./CourseSelect";
import PaymentSelect from "./PaymentSelect";
import MailingListToggle from "./MailingListToggle";
import {
  ErrorLabel,
  LabelOrError,
  StaticAnimation,
  NoCourseAvailable,
} from "../../components";

const query = gql`
  query RegistrationForm {
    schema: getFormSchema(form: REGISTRATION)
    courses: getCourses {
      id
    }
  }
`;

// utility that confirms /register/:courseId is a valid ID in API courses
const isValidCourseId = (courseId, courses) =>
  courses.some(course => course.id === courseId);

class RegistrationForm extends Component {
  static propTypes = {
    data: PropTypes.shape({
      schema: PropTypes.object.isRequired,
      courses: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string }))
        .isRequired,
    }),
    submitRegistration: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: {
        city: "",
        email: "",
        state: "",
        country: "",
        company: "",
        courseId: "",
        lastName: "",
        firstName: "",
        paymentOption: "",
        mailingList: false,
      },
      errors: {},
    };

    const { courses, schema } = props.data;
    const { courseId } = props.match.params;

    // preselect the course if a valid courseId is found in the path
    if (courseId && isValidCourseId(courseId, courses)) {
      this.state.fields.courseId = courseId;
    }

    // compiles the API form schema, usage: formValidator(fieldsObject) -> boolean
    const ajv = new AJV({ allErrors: true });
    // after executing formValidator.errors holds field errors information
    this.state.formValidator = ajv.compile(schema);
  }

  // shouldSubmit is passed true by <PaymentSelect> onClick
  handleChange = (_, target, shouldSubmit) =>
    this.setState(
      state => {
        const { name, value } = target;

        return {
          fields: { ...state.fields, [name]: value },
          errors: { ...state.errors, [name]: false },
        };
      },
      // handleSubmit after setting state
      () => shouldSubmit && this.handleSubmit(),
    );

  handleCheckbox = (event, target) => {
    const { name, checked } = target;
    this.handleChange(event, { name, value: checked });
  };

  handleFormErrors = validationErrors => {
    const errors = validationErrors.reduce((errors, error) => {
      // AJV has each field name as dataPath: ".fieldName"
      const name = error.dataPath.replace(".", "");
      return { ...errors, [name]: true };
    }, {});

    this.setState({ errors, shouldShakeForErrors: true }, () =>
      this.setState({ shouldShakeForErrors: false }),
    );
  };

  handleSubmit = () => {
    const { submitRegistration } = this.props;
    const { fields, formValidator } = this.state;

    const isValid = formValidator(fields);
    if (!isValid) {
      return this.handleFormErrors(formValidator.errors);
    }

    submitRegistration(fields);
  };

  labelOrError = (fieldName, labelText) => {
    return (
      <LabelOrError
        fieldName={fieldName}
        labelText={labelText}
        errors={this.state.errors}
      />
    );
  };

  render() {
    const { courses } = this.props.data;
    const { fields, errors, shouldShakeForErrors } = this.state;

    if (courses.length === 0) {
      return <NoCourseAvailable mobileWidth="90%" standardWidth="40%" />;
    }

    return (
      <Form>
        <Header
          as="h1"
          textAlign="center"
          content="Course Registration"
          inverted
        />

        <Divider clearing />

        {/* course selection */}
        <Grid container centered>
          <Grid.Row>
            <CourseSelect
              onSelect={this.handleChange}
              selectedCourseId={fields.courseId}
            />
          </Grid.Row>
          {errors.courseId && (
            <Grid.Column
              computer="3"
              tablet="10"
              mobile="10"
              textAlign="center"
            >
              <ErrorLabel
                pointing="above"
                attached="bottom"
                content="Please select a course"
              />
            </Grid.Column>
          )}
        </Grid>

        <Divider clearing hidden />

        {/* student info */}
        <StaticAnimation animation="shake" animate={shouldShakeForErrors}>
          <Container style={{ width: "80%" }}>
            <Form.Group widths="equal">
              <Form.Field width="6">
                <Input
                  name="firstName"
                  value={fields.firstName}
                  onChange={this.handleChange}
                  label={this.labelOrError("firstName", "First Name")}
                />
              </Form.Field>
              <Form.Field width="6">
                <Input
                  inverted
                  name="lastName"
                  value={fields.lastName}
                  onChange={this.handleChange}
                  label={this.labelOrError("lastName", "Last Name")}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field width="8">
                <Input
                  name="company"
                  value={fields.company}
                  onChange={this.handleChange}
                  label={this.labelOrError("company", "Company")}
                />
              </Form.Field>
              <Form.Field width="8">
                <Input
                  name="email"
                  value={fields.email}
                  onChange={this.handleChange}
                  label={this.labelOrError("email", "Email")}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field width="5">
                <Input
                  name="city"
                  value={fields.city}
                  onChange={this.handleChange}
                  label={this.labelOrError("city", "City")}
                />
              </Form.Field>
              <Form.Field width="5">
                <Input
                  name="state"
                  value={fields.state}
                  onChange={this.handleChange}
                  label={this.labelOrError("state", "State")}
                />
              </Form.Field>
              <Form.Field width="5">
                <Input
                  name="country"
                  value={fields.country}
                  onChange={this.handleChange}
                  label={this.labelOrError("country", "Country")}
                />
              </Form.Field>
            </Form.Group>
          </Container>
        </StaticAnimation>

        <Divider hidden />

        <Grid centered container>
          {/* mailing list */}
          <Grid.Row>
            <MailingListToggle
              onToggle={this.handleCheckbox}
              mailingListField={fields.mailingList}
            />
          </Grid.Row>

          {/* payment select / form submit */}
          <Grid.Row>
            {/* handles payment type selection and form submission */}
            <PaymentSelect
              onSelect={this.handleChange}
              selectedPaymentOption={fields.paymentOption}
            />
          </Grid.Row>

          {/* credit card processing notice */}
          <Grid.Row>
            <Label
              basic
              as="a"
              size="large"
              color="purple"
              target="_blank"
              rel="noopener noreferrer"
              href="https://stripe.com/"
            >
              <Icon name="lock" />
              secure credit processing with{" "}
              <Icon name="stripe card" size="large" fitted />
            </Label>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default withHandledQuery(RegistrationForm, query);
