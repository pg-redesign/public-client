import brasilContent from "./brasil";
import pollutionContent from "./pollution";
import remediationContent from "./remediation";

import PropTypes from "prop-types";

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

const sharedContent = {
  uniqueAspects: [
    "Our courses have been continously updated and refined for over 40 years",
    "Our instructors have over 300 years of collective academic and consulting experience",
    "Each course includes its own 1200+ page binder filled with practical notes and unique material",
    "Our courses have the largest attendance in the industry attracting professionals from around the world",
    "We have thousands of testimonials and over 90% of our students register by colleague recommendation",
  ],

  whoShouldAttend: [
    "Chemists",
    "Engineers",
    "Geologists",
    "Environmental Scientists",
    "State and Federal Regulators",
    "Superfund and Industry Site Managers",
    "Compliance/Regulatory Program Managers",
  ],
};

export default {
  // TODO: uncomment when complete
  // brasil: {
  //   ...sharedContent,
  //   ...brasilContent,
  // },
  brasil: null,
  
  pollution: {
    ...sharedContent,
    ...pollutionContent,
  },
  remediation: {
    ...sharedContent,
    ...remediationContent,
  },
};
