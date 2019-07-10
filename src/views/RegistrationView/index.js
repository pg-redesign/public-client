import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import siteLinks from "../site-links";

import { MutationModal } from "../../components";
import RegistrationForm from "./RegistrationForm";

const mutation = gql`
  mutation SubmitRegistrationForm($registrationData: RegistrationInput!) {
    student: registerForCourse(registrationData: $registrationData) {
      id
      email
      firstName
      lastName
    }
  }
`;

const modalMessageProps = {
  loading: () => ({
    header: "Submitting course registration...",
  }),

  error: error => {
    console.error({ error });
    return {
      header: error.message,
    };
  },

  success: data => {
    const { email } = data.student;

    return {
      header: "Registration pending.",
      body: `An invoice with payment options has been sent to ${email}.`,
      extra: "(you can close this window)",
    };
  },
};

class RegistrationView extends Component {
  state = {
    courseId: "",
    paymentOption: "",
  };

  handleSubmit = submitMutation => registrationData => {
    const { courseId, paymentOption } = registrationData;

    this.setState({ courseId, paymentOption }, () =>
      submitMutation({ variables: { registrationData } }),
    );
  };

  render() {
    const { courseId, paymentOption } = this.state;

    return (
      <Mutation mutation={mutation}>
        {(submitMutation, mutationState) => {
          const { data } = mutationState;

          if (data && paymentOption === "CREDIT") {
            const { student } = data;

            return (
              <Redirect
                to={{
                  state: { student, courseId },
                  pathname: siteLinks.CREDIT_PAYMENT,
                }}
              />
            );
          }

          return (
            <Container fluid>
              {/* activated when mutation is sent */}
              <MutationModal
                {...mutationState}
                messageProps={modalMessageProps}
              />

              <RegistrationForm
                {...this.props}
                submitRegistration={this.handleSubmit(submitMutation)}
              />
            </Container>
          );
        }}
      </Mutation>
    );
  }
}

export default RegistrationView;
