import React from "react";
import PropTypes from "prop-types";

import editableContent from "../../editable-content";
import { courseTypeShape } from "../../utils/prop-types";
import responsiveWrapper from "../../wrappers/responsiveWrapper";
import withUpcomingCourses from "../../wrappers/withUpcomingCourses";
import { convertToFullName } from "../../utils/format-editable-content";

import MobileCourseView from "./MobileCourseView";
import StandardCourseView from "./StandardCourseView";

const CourseView = props => {
  const { data, match, mobile } = props;
  const { courseShortName } = match.params;

  const courseViewProps = {
    courseContent: editableContent[courseShortName],
    courseFullName: convertToFullName(courseShortName),
    availableCourse: data.courses.find(
      course => course.shortName === courseShortName.toUpperCase(),
    ),
  };

  return mobile ? (
    <MobileCourseView {...courseViewProps} />
  ) : (
    <StandardCourseView {...courseViewProps} />
  );
};

CourseView.propTypes = {
  mobile: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      courseShortName: PropTypes.string.isRequired,
    }),
  }),
  data: PropTypes.shape({
    courses: PropTypes.arrayOf(courseTypeShape),
  }),
};
CourseView.defaultProps = {
  mobile: false,
  data: {
    courses: [],
  },
};
export default responsiveWrapper(withUpcomingCourses(CourseView));
