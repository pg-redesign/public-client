import React from "react";
import { Card } from "semantic-ui-react";

import CourseCard from "../../components/CourseCard";
import { withUpcomingCourses } from "../../wrappers";

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
  ...withUpcomingCourses.consumerPropTypes,
};

export default withUpcomingCourses(UpcomingCourses);
