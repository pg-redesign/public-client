import React from "react";
import PropTypes from "prop-types";

import { courseTypeShape } from "../../utils/prop-types";
import { CourseCard } from "../../components";

const RegisterNow = props => {
  const { course } = props;

  return <CourseCard {...course} fluid withWhatsIncluded withRegisterButton />;
};

RegisterNow.propTypes = {
  course: courseTypeShape.isRequired,
};

export default RegisterNow;
