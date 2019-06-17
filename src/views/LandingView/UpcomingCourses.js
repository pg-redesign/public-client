import React from "react";
import { Card, Header, Divider } from "semantic-ui-react";

import { CourseCard } from "../../components";
import { withUpcomingCourses } from "../../wrappers";

const UpcomingCourses = props => {
  const { courses } = props.data;

  return (
    courses.length > 0 && (
      <>
        <Divider horizontal>
          <Header
            as="h2"
            inverted
            textAlign="center"
            content="Upcoming Courses"
          />
        </Divider>

        <Card.Group stackable centered itemsPerRow="2">
          {courses.map(course => (
            <CourseCard
              {...course}
              withTopics
              withButtons
              withWhatsIncluded
              key={`upcoming-course-${course.id}`}
            />
          ))}
        </Card.Group>
      </>
    )
  );
};

UpcomingCourses.propTypes = {
  ...withUpcomingCourses.consumerPropTypes,
};

export default withUpcomingCourses(UpcomingCourses);
