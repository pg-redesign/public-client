import React from "react";
import { gql } from "apollo-boost";

import Request from "../components/Request";

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
 * - provides a courses [Course] prop to the Consumer component
 * - curries any additional props
 * @param {func} Consumer receives props.courses
 */
const withUpcomingCourses = Consumer => props => (
  <Request query={query} Consumer={Consumer} {...props} />
);

export default withUpcomingCourses;
