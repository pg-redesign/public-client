// DO NOT EDIT ANYTHING IN HERE
// only edit pollution, remediation, and testimonal files as needed
import PropTypes from "prop-types";

import pollution from "./pollution";
import remediation from "./remediation";
import testimonials from "./testimonials";

export const courseContentType = PropTypes.shape({
  overview: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  schedule: PropTypes.arrayOf(PropTypes.string).isRequired,
  uniqueAspects: PropTypes.arrayOf(PropTypes.string).isRequired,
  whoShouldAttend: PropTypes.arrayOf(PropTypes.string).isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      subTopics: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
});

export default {
  pollution,
  remediation,
  testimonials,
};
