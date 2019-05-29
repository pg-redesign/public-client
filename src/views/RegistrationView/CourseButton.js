import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Icon } from "semantic-ui-react";

import { courseType } from "../../utils/prop-types";
import { CourseCardTop } from "../../components/CourseCard";

const propTypes = {
  course: courseType.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedCourseID: PropTypes.number.isRequired,
};

const CourseButton = props => {
  const { course, selectedCourseID, handleChange } = props;

  const handleClick = event =>
    handleChange(event, { name: "courseID", value: course.id });

  return (
    <Button
      compact
      inverted
      onClick={handleClick}
      style={{ margin: "10px" }}
      className="registration-button"
      key={`course-button-${course.id}`}
      active={selectedCourseID === course.id}
    >
      <Card color="grey" raised>
        <CourseCardTop {...course} />
        <Card.Content textAlign="center" style={{ color: "black" }}>
          <Icon name="dollar sign" color="green" fitted />
          {course.price || 1695} USD
        </Card.Content>
      </Card>
    </Button>
  );
};

CourseButton.propTypes = propTypes;

export default CourseButton;
