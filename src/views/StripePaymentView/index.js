import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

import { withStripeProvider } from "../../wrappers";
import { idType, studentTypeShape } from "../../utils/prop-types";

import { MutationModal } from "../../components";
import StripePaymentForm from "./StripePaymentForm";

const propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      courseId: idType.isRequired,
      student: studentTypeShape.isRequired,
    }),
  }),
};

const mutation = gql`
  mutation SubmitStripePayment($paymentData: StripePaymentInput!) {
    student: payForCourseWithStripe(paymentData: $paymentData) {
      id
      email
    }
  }
`;

const modalMessageProps = {
  loading: () => ({
    header: "Submitting your payment.",
  }),

  error: error => ({
    header: "Payment submission failed. You have not been charged.",
    body: error.message,
  }),

  success: data => {
    const { email } = data.student;

    return {
      header: "Payment complete!",
      body: `A receipt has been sent to ${email}.`,
      extra: "(you can close this window)",
    };
  },
};

const StripePayment = props => {
  const { state } = props.location;

  if (!state) {
    // TODO: handle directly being linked to payment page (from email invoice)
    // send paymentId as qs / path param?
    return <Redirect to="/" />;
  }

  const { student, courseId } = state;

  return (
    <Mutation mutation={mutation}>
      {(submitPayment, mutationState) => (
        <>
          {/* activated when mutation is sent */}
          <MutationModal {...mutationState} messageProps={modalMessageProps} />
          <StripePaymentForm
            {...props}
            student={student}
            courseId={courseId}
            submitPayment={submitPayment}
          />
        </>
      )}
    </Mutation>
  );
};

StripePayment.propTypes = propTypes;

export default withStripeProvider(StripePayment);
