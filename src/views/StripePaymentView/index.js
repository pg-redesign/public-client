import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";

import {
  withHandledQuery,
  withUpcomingCourses,
  withStripeProvider,
} from "../../wrappers";
import {
  idType,
  courseTypeShape,
  studentTypeShape,
} from "../../utils/prop-types";
import { extractRegistrationData } from "./utils";

import { MutationModal } from "../../components";
import StripePaymentForm from "./StripePaymentForm";

// either location.state or match.params.registrationCode is required
const propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      courseId: idType.isRequired,
      student: studentTypeShape.isRequired,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      // link path param of API signed JWT with course and student data
      registrationCode: PropTypes.string,
    }),
  }),
  data: PropTypes.shape({
    schema: PropTypes.object.isRequired,
    courses: PropTypes.arrayOf(courseTypeShape).isRequired,
  }),
};

const query = gql`
  ${withUpcomingCourses.courseCardFragment}

  query StripePaymentForm {
    schema: getFormSchema(form: STRIPE_PAYMENT)

    courses: getCourses {
      ...CourseCardData
    }
  }
`;

const mutation = gql`
  mutation SubmitStripePayment($paymentData: StripePaymentData!) {
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
      body: `A confirmation receipt has been sent to ${email}.`,
      extra: "(you may exit the site)",
    };
  },
};

const StripePayment = props => {
  const registrationData = extractRegistrationData(props);

  if (!registrationData || !registrationData.course) {
    return <Redirect to="/" />; // invalid or missing data
  }

  const { course, student } = registrationData;

  return (
    <Mutation mutation={mutation}>
      {(submitPayment, mutationState) => (
        <>
          {/* modal is activated when mutation is executed */}
          <MutationModal {...mutationState} messageProps={modalMessageProps} />
          <StripePaymentForm
            {...props}
            course={course}
            student={student}
            submitPayment={submitPayment}
            formSchema={props.data.schema}
          />
        </>
      )}
    </Mutation>
  );
};

StripePayment.propTypes = propTypes;

export default withStripeProvider(withHandledQuery(StripePayment, query));
