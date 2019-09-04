import PropTypes from "prop-types";
import pollution from "./pollution";
import remediation from "./remediation";

export const testimonialType = {
  student: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export const testimonialTypeShape = PropTypes.shape(testimonialType);

export default {
  pollution,
  remediation,
};

/**
 * Format: (replace stylized quotes with standard)
 *
 * "Message content"
 *
 * Student Name
 *
 * Company Name
 * ^
 */
// const shaped = testimonials.split("^").reduce((acc, testimonial) => {
//   const [message, student, company] = testimonial
//     .split("\n\n")
//     .map(str => str.replace(/[\t\n]+/gi, ""));

//   return [...acc, { student, company, message }];
// }, []);

// require("fs").writeFileSync("./pollution.json", JSON.stringify(shaped));
