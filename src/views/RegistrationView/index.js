import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Container } from "semantic-ui-react";

import SubmissionModal from "./SubmissionModal";
import RegistrationForm from "./RegistrationForm";

const mutation = gql`
  mutation SubmitRegistrationForm($registrationData: RegistrationInput!) {
    student: registerForCourse(registrationData: $registrationData) {
      id
      email
      firstName
      lastName
      location {
        city
        state
        country
      }
    }
  }
`;

const RegistrationView = props => {
  const processError = error => {
    // TODO: proper logging
    console.error({ error });
    return "Failed to register for course. Try again later.";
  };

  return (
    <Mutation mutation={mutation}>
      {(submitForm, mutationState) => {
        const { loading, error, data } = mutationState;

        return (
          <Container fluid>
            <SubmissionModal
              isOpen={loading || Boolean(error)}
              isLoading={loading}
              errorMessage={error && processError(error)}
            />
            <RegistrationForm
              {...props}
              submitForm={submitForm}
              submitComplete={Boolean(data)}
            />
          </Container>
        );
      }}
    </Mutation>
  );
};

export default RegistrationView;
