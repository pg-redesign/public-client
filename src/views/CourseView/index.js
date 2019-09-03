import React from "react";
import PropTypes from "prop-types";
import { Grid, Message } from "semantic-ui-react";

import { courseContent } from "../../editable-content";
import { courseTypeShape } from "../../utils/prop-types";
import responsiveWrapper from "../../wrappers/responsiveWrapper";
import withUpcomingCourses from "../../wrappers/withUpcomingCourses";
import { convertToFullName } from "../../utils/format-editable-content";

import MobileCourseView from "./MobileCourseView";
import StandardCourseView from "./StandardCourseView";
import { UnderConstruction } from "../../components";

const CourseView = props => {
  const { data, match, mobile } = props;
  const { shortName } = match.params;

  const content = courseContent[shortName];

  if (!content) return <UnderConstruction mobile={mobile} />;

  const courseViewProps = {
    content,
    courseFullName: convertToFullName(shortName),
    availableCourse: data.courses.find(
      course => course.shortName === shortName.toUpperCase(),
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
      shortName: PropTypes.string.isRequired,
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
