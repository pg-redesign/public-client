import React from "react";

import { CourseCard } from "../../components";
import { courseTypeShape } from "../../utils/prop-types";

const RegisterNow = props => {
  const { course } = props;

  return <CourseCard {...course} fluid withWhatsIncluded withRegisterButton />;
};

RegisterNow.propTypes = {
  course: courseTypeShape.isRequired,
};

export default RegisterNow;
