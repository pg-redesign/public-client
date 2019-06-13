import React, { Component } from "react";
import PropTypes from "prop-types";
import AJV from "ajv";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Form, Input, Button } from "semantic-ui-react";

import { withHandledQuery } from "../../wrappers";
import { LoadingMessage, ErrorMessage, SuccessMessage } from "../../components";

const query = gql`
  query MailingListForm {
    schema: getFormSchema(form: MAILING_LIST)
  }
`;

const mutation = gql`
  mutation JoinMailingList($mailingListData: MailingListInput!) {
    subscribeToMailingList(mailingListData: $mailingListData)
  }
`;

class JoinMailingList extends Component {
  static propTypes = {
    data: PropTypes.shape({ schema: PropTypes.object.isRequired }).isRequired,
  };

  constructor(props) {
    super(props);

    const ajv = new AJV({ allErrors: true });
    const formValidator = ajv.compile(props.data.schema);

    this.state = {
      errors: {},
      formValidator,
      fields: { email: "", firstName: "", lastName: "" },
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(state => ({
      fields: { ...state.fields, [name]: value },
      errors: { ...state.errors, [name]: false },
    }));
  };

  handleFormErrors = validationErrors => {
    const errors = validationErrors.reduce((errors, error) => {
      const name = error.dataPath.replace(".", "");
      return { ...errors, [name]: true };
    }, {});

    this.setState({ errors });
  };

  handleSubmit = submitMutation => () => {
    const { fields, formValidator } = this.state;

    const isValid = formValidator(fields);
    if (!isValid) {
      return this.handleFormErrors(formValidator.errors);
    }

    submitMutation({ variables: { mailingListData: fields } });
  };

  render() {
    const { fields, errors } = this.state;

    return (
      <Mutation mutation={mutation}>
        {(joinMailingList, mutationState) => {
          const { loading, error, data } = mutationState;

          if (loading) {
            return (
              <LoadingMessage header="Joining mailing list..." width="75%" />
            );
          }

          if (error || data === false) {
            return (
              <ErrorMessage header="subscription failed" body="" width="75%" />
            );
          }

          if (data) {
            return (
              <SuccessMessage header="thank you for joining" width="75%" />
            );
          }

          return (
            <Form>
              <Form.Group>
                <Form.Field width="8" error={errors.firstName}>
                  <Input
                    required
                    size="large"
                    name="firstName"
                    value={fields.firstName}
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field width="8" error={errors.lastName}>
                  <Input
                    required
                    size="large"
                    name="lastName"
                    value={fields.lastName}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Field error={errors.email}>
                <Input
                  required
                  size="large"
                  type="email"
                  name="email"
                  value={fields.email}
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Button
                  size="large"
                  type="button"
                  color="blue"
                  content="Join Our Mailing List"
                  onClick={this.handleSubmit(joinMailingList)}
                  style={{ color: "white", background: "var(--primary)" }}
                />
              </Form.Field>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default withHandledQuery(JoinMailingList, query);
