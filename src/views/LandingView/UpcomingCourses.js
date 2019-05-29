import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

import CourseCard from "../../components/CourseCard";
import { withUpcomingCourses } from "../../wrappers";
import { courseTypeShape } from "../../utils/prop-types";

const UpcomingCourses = props => {
  const { courses } = props.data;

  return (
    <Card.Group stackable centered itemsPerRow="2">
      {courses.map(course => (
        <CourseCard key={`course-${course.id}`} {...course} />
      ))}
    </Card.Group>
  );
};

UpcomingCourses.propTypes = {
  data: PropTypes.shape({
    courses: PropTypes.arrayOf(courseTypeShape).isRequired,
  }),
};

export default withUpcomingCourses(UpcomingCourses);
