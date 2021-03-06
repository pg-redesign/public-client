import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

import { CourseCard } from "../../components";
import { withUpcomingCourses } from "../../wrappers";
import { courseTypeShape } from "../../utils/prop-types";

const courseSelectPropTypes = {
  ...withUpcomingCourses.consumerPropTypes,
  onSelect: PropTypes.func.isRequired,
  selectedCourseId: PropTypes.string.isRequired,
};

const courseSelectButtonPropTypes = {
  course: courseTypeShape.isRequired,
  onSelect: courseSelectPropTypes.onSelect,
  selectedCourseId: courseSelectPropTypes.selectedCourseId,
};

export const CourseSelectButton = props => {
  const { course, selectedCourseId, onSelect } = props;

  const handleClick = event =>
    onSelect(event, { name: "courseId", value: course.id });

  return (
    <Button
      compact
      inverted
      onClick={handleClick}
      className="registration-button"
      key={`course-button-${course.id}`}
      active={selectedCourseId === course.id}
    >
      <CourseCard {...course} withPrice withWhatsIncluded />
    </Button>
  );
};

CourseSelectButton.propTypes = courseSelectButtonPropTypes;

const CourseSelect = props => {
  const {
    onSelect,
    selectedCourseId,
    data: { courses },
  } = props;

  return courses.map(course => (
    <CourseSelectButton
      course={course}
      onSelect={onSelect}
      selectedCourseId={selectedCourseId}
      key={`course-select-button-${course.id}`}
    />
  ));
};

CourseSelect.propTypes = courseSelectPropTypes;

CourseSelect.Button = CourseSelectButton;
export default withUpcomingCourses(CourseSelect);
