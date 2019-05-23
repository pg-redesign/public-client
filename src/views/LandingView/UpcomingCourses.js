import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

import { courseTypeShape } from "../../utils/prop-types";
import CourseCard from "../../components/CourseCard";

// TODO: remove when connected to API
import { upcomingCourses } from "../mock-data";

const UpcomingCourses = props => {
	const { courses } = props;

	return (
		<Card.Group stackable itemsPerRow="2">
			{courses.map(courseData => (
				<CourseCard key={`course-${courseData.id}`} {...courseData} />
			))}
		</Card.Group>
	);
};

UpcomingCourses.propTypes = {
	courses: PropTypes.arrayOf(courseTypeShape).isRequired,
};

UpcomingCourses.defaultProps = {
	courses: upcomingCourses,
};

export default UpcomingCourses;
