// DO NOT EDIT ANYTHING IN THIS FILE
import PropTypes from "prop-types";
import pollution from "./pollution";
import remediation from "./remediation";

export const courseTopicTypeShape = PropTypes.shape({
  header: PropTypes.string.isRequired,
  subTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const courseContentType = {
  overview: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  schedule: PropTypes.arrayOf(PropTypes.string).isRequired,
  uniqueAspects: PropTypes.arrayOf(PropTypes.string).isRequired,
  whoShouldAttend: PropTypes.arrayOf(PropTypes.string).isRequired,
  topics: PropTypes.arrayOf(courseTopicTypeShape).isRequired,
};

export const courseContentTypeShape = PropTypes.shape(courseContentType);

export { default as instructors } from "./instructors";
export { default as testimonials } from "./testimonials";
export const courseContent = {
  pollution,
  remediation,
};
