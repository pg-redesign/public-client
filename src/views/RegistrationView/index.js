import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { Container } from "semantic-ui-react";

import siteLinks from "../site-links";

import RegistrationForm from "./RegistrationForm";
import MutationModal from "../../components/FormTools/MutationModal";

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
    header: "Submitting course registration.",
  }),

  error: error => {
    console.error({ error });
    return {
      body: error.message,
      extra: "(try refreshing the page and re-submitting)",
    };
  },

  success: data => {
    const { email } = data.student;

    return {
      header: "Registration complete!",
      body: `An invoice with alternative payment instructions has been sent to ${email}.`,
      extra: "(you can close this window)",
    };
  },
};

class RegistrationView extends Component {
  state = {
    courseId: "",
    paymentType: "",
  };

  handleSubmit = submitMutation => registrationData => {
    const { courseId, paymentType } = registrationData;

    this.setState({ courseId, paymentType }, () =>
      submitMutation({ variables: { registrationData } }),
    );
  };

  render() {
    const { courseId, paymentType } = this.state;

    return (
      <Mutation mutation={mutation}>
        {(submitMutation, mutationState) => {
          const { data } = mutationState;

          if (data && paymentType === "CREDIT") {
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
