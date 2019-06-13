import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";

import { QueryHandler } from "../components";
import { courseTypeShape } from "../utils/prop-types";

const courseCardFragment = gql`
  fragment CourseCardData on Course {
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
`;

const query = gql`
  ${courseCardFragment}

  query UpcomingCourses {
    courses: getCourses {
      ...CourseCardData
    }
  }
`;

/**
 * HOF used for requesting and injecting upcoming course data
 * - uses <QueryHandler> wrapper component with getCourses query
 * - provides a data.courses [Course] prop to the Consumer component
 * - curries any additional props
 * @param {func} Consumer receives props.data.courses
 */
const withUpcomingCourses = Consumer => props => (
  <QueryHandler query={query} Consumer={Consumer} {...props} />
);

withUpcomingCourses.courseCardFragment = courseCardFragment;

withUpcomingCourses.consumerPropTypes = {
  data: PropTypes.shape({
    courses: PropTypes.arrayOf(courseTypeShape).isRequired,
  }),
};

export default withUpcomingCourses;
