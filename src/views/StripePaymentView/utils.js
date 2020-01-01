import JWT from "jsonwebtoken";

const getCourseById = (courseId, courses) => {
  const [course] = courses.filter(
    course => Number(course.id) === Number(courseId),
  );

  return course || null;
};

export const extractRegistrationData = props => {
  const { courses } = props.data;
  const { state } = props.location;
  const { registrationCode } = props.match.params;

  // data from internal Redirect state
  if (state) {
    const { courseId, student } = state;

    return {
      student,
      course: getCourseById(courseId, courses),
    };
  }

  // data from API signed JWT link
  try {
    const {
      data: { courseId, studentId, email },
    } = JWT.verify(registrationCode, process.env.REACT_APP_PAYLOAD_PUBLIC_KEY, {
      algorithms: ["RS256"],
      issuer: process.env.REACT_APP_API_HOST,
    });
    console.log({ courseId, studentId, email });
    return {
      student: { id: studentId, email },
      course: getCourseById(courseId, courses),
    };
  } catch (error) {
    // token validation or data error
    return null;
  }
};
