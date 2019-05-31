import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";

import Request from "../components/Request";
import { courseTypeShape } from "../utils/prop-types";

const query = gql`
  query UpcomingCourses {
    courses: getCourses {
      id
      name
      shortName: name(short: true)
      date
      price
      description
      location {
        mapURL
        concatenated
      }
    }
  }
`;

/**
 * HOF used for requesting and injecting upcoming course data
 * - uses <Request> wrapper component with getCourses query
 * - provides a data.courses [Course] prop to the Consumer component
 * - curries any additional props
 * @param {func} Consumer receives props.data.courses
 */
const withUpcomingCourses = Consumer => props => (
  <Request query={query} Consumer={Consumer} {...props} />
);

withUpcomingCourses.consumerPropTypes = {
  data: PropTypes.shape({
    courses: PropTypes.arrayOf(courseTypeShape).isRequired,
  }),
};

export default withUpcomingCourses;
