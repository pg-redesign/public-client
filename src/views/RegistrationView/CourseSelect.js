import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Icon } from "semantic-ui-react";

import { withUpcomingCourses } from "../../wrappers";
import { courseTypeShape } from "../../utils/prop-types";
import { CourseCardTop } from "../../components/CourseCard";

const courseSelectPropTypes = {
  ...withUpcomingCourses.consumerPropTypes,
  handleChange: PropTypes.func.isRequired,
  selectedCourseId: PropTypes.string.isRequired,
};

const courseSelectButtonPropTypes = {
  course: courseTypeShape.isRequired,
  handleChange: courseSelectPropTypes.handleChange,
  selectedCourseId: courseSelectPropTypes.selectedCourseId,
};

export const CourseSelectButton = props => {
  const { course, selectedCourseId, handleChange } = props;

  const handleClick = event =>
    handleChange(event, { name: "courseId", value: course.id });

  return (
    <Button
      compact
      inverted
      onClick={handleClick}
      style={{ margin: "10px" }}
      className="registration-button"
      key={`course-button-${course.id}`}
      active={selectedCourseId === course.id}
    >
      <Card color="grey" raised>
        <CourseCardTop {...course} />
        <Card.Content textAlign="center" style={{ color: "black" }}>
          <Icon name="dollar sign" color="green" fitted />
          {course.price} USD
        </Card.Content>
      </Card>
    </Button>
  );
};

CourseSelectButton.propTypes = courseSelectButtonPropTypes;

const CourseSelect = props => {
  const {
    handleChange,
    selectedCourseId,
    data: { courses },
  } = props;

  return courses.map(course => (
    <CourseSelectButton
      course={course}
      handleChange={handleChange}
      selectedCourseId={selectedCourseId}
      key={`course-select-button-${course.id}`}
    />
  ));
};

CourseSelect.propTypes = courseSelectPropTypes;

CourseSelect.Button = CourseSelectButton;
export default withUpcomingCourses(CourseSelect);
