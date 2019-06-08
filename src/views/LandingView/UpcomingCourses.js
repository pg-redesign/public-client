import React from "react";
import { Card } from "semantic-ui-react";

import { CourseCard } from "../../components";
import { withUpcomingCourses } from "../../wrappers";

const UpcomingCourses = props => {
  const { courses } = props.data;

  return (
    <Card.Group stackable centered itemsPerRow="2">
      {courses.map(course => (
        <CourseCard
          {...course}
          withButtons
          withTopics
          withWhatsIncluded
          key={`course-${course.id}`}
        />
      ))}
    </Card.Group>
  );
};

UpcomingCourses.propTypes = {
  ...withUpcomingCourses.consumerPropTypes,
};

export default withUpcomingCourses(UpcomingCourses);
