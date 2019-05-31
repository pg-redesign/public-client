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
  Message,
  Divider,
  Container,
} from "semantic-ui-react";

import "./style-overrides.css";

import CourseSelect from "./CourseSelect";
import PaymentSelect from "./PaymentSelect";
// import client from "../../utils/api-client";
import Request from "../../components/Request";
import ErrorLabel from "../../components/ErrorLabel";
import StaticAnimation from "../../components/StaticAnimation";

const query = gql`
  query RegistrationView {
    schema: getFormSchema(form: REGISTRATION)
    courses: getCourses {
      id
    }
  }
`;

const isValidCourseId = (courseId, courses) =>
  courses.some(course => course.id === courseId);

class RegistrationView extends Component {
  static propTypes = {
    data: PropTypes.shape({
      schema: PropTypes.object.isRequired,
      courses: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string }))
        .isRequired,
    }),
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
        paymentType: "",
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

  // callback used for additional operation after state has been set
  handleChange = (event, target, callback) =>
    this.setState(
      state => {
        const { name, value } = target;
        return {
          fields: { ...state.fields, [name]: value },
          errors: { ...state.errors, [name]: false },
        };
      },
      // handleSubmit after setting state, <PaymentSelect> onClick
      () => callback && callback(event),
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

    this.setState({ errors, shouldShake: true }, () =>
      this.setState({ shouldShake: false }),
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { fields, formValidator } = this.state;

    const isValid = formValidator(fields);
    if (!isValid) return this.handleFormErrors(formValidator.errors);

    // TODO: submit form
  };

  labelOrError = (fieldName, labelText, errorText) => {
    const error = this.state.errors[fieldName];

    return error ? (
      <ErrorLabel content={`invalid ${labelText}`} />
    ) : (
      <Label basic content={labelText} />
    );
  };

  render() {
    const { fields, errors, shouldShake } = this.state;

    return (
      <Form>
        <Header
          as="h1"
          textAlign="center"
          content="Course Registration"
          inverted
        />
        <Divider clearing />

        <Grid container centered>
          <Grid.Row>
            <CourseSelect
              handleSelect={this.handleChange}
              selectedCourseId={fields.courseId}
            />
          </Grid.Row>
          {errors.courseId && (
            <Grid.Column computer="3" width="10" textAlign="center" centered>
              <ErrorLabel
                pointing="above"
                attached="bottom"
                content="Please select a course"
              />
            </Grid.Column>
          )}
        </Grid>
        <Divider clearing />

        {/* student info */}
        <StaticAnimation animation="shake" animate={shouldShake}>
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
                  type="email"
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

            <Grid centered container>
              <Grid.Row>
                <Message compact positive>
                  <Message.Header content="Would you like to join our mailing list?" />
                  <Message.List>
                    <Message.Item>
                      We will <strong>never spam or sell</strong> your contact
                      information
                    </Message.Item>
                    <Message.Item>
                      We <strong>only send 4-5 emails per year</strong> about
                      upcoming courses and web events
                    </Message.Item>
                  </Message.List>
                  <Divider />
                  <Form.Checkbox
                    toggle
                    name="mailingList"
                    checked={fields.mailingList}
                    onClick={this.handleCheckbox}
                  />
                </Message>
              </Grid.Row>

              <Grid.Row>
                <PaymentSelect
                  handleSubmit={this.handleSubmit}
                  handleSelect={this.handleChange}
                  selectedPaymentType={fields.paymentType}
                />
              </Grid.Row>

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
                  secure credit card processing with{" "}
                  <Icon name="stripe card" size="large" fitted />
                </Label>
              </Grid.Row>
            </Grid>
          </Container>
        </StaticAnimation>
      </Form>
    );
  }
}

// export default RegistrationView;
export default props => (
  <Request query={query} Consumer={RegistrationView} {...props} />
);
