import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, List, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const courseDescription = descriptionData =>
	descriptionData.map(description => (
		<List.Item>
			<List.Content content={description} />
		</List.Item>
	));

const pollutionCourse = {
	id: 1,
	shortName: "pollution",
	name: "Pollution & Hydrology Course",
	date: "June 5-12, 2019",
	description: {
		short: [
			"Basic to Advanced Principles in Groundwater Pollution and Hydrology",
			"Basic to Advanced Concepts and Principles of Groundwater Flow, Fate and Transport and Natural Attenuation",
			"Groundwater Monitoring And Sampling Technology",
			"Conceptual Site Models (CSM) & Remediation Strategies",
			"Practical Applications of Modern Modeling Software",
		],
	},
	location: {
		city: "Tampa",
		state: "FL",
		country: "USA",
		url: "https://goo.gl/maps/s9GeT8M9XuahQjyXA",
	},
};

const remediationCourse = {
	id: 2,
	shortName: "remediation",
	name: "Remediation Course",
	date: "July 5-12, 2019",
	description: {
		short: [
			"Basic to Advanced Principles in Groundwater Pollution and Hydrology",
			"Basic to Advanced Concepts and Principles of Groundwater Flow, Fate and Transport and Natural Attenuation",
			"Groundwater Monitoring And Sampling Technology",
			"Conceptual Site Models (CSM) & Remediation Strategies",
			"Practical Applications of Modern Modeling Software",
		],
	},
	location: {
		city: "Santos",
		state: "SP",
		country: "Brazil",
		url: "https://goo.gl/maps/s9GeT8M9XuahQjyXA",
	},
};

export const CourseCard = props => {
	const { id, name, shortName, date, description, location } = props;

	return (
		<Card raised color="grey">
			<Card.Content textAlign="left">
				<Card.Header as="h2" textAlign="center" content={name} />
				<Card.Meta textAlign="center">
					{date}
					{" - "}
					<a href={location.url} target="_blank" rel="noopener noreferrer">
						{location.city}, {location.state}, {location.country}&nbsp;
						<Icon name="marker" color="red" />
					</a>
				</Card.Meta>
				<Card.Meta />
			</Card.Content>
			<Card.Content extra textAlign="left">
				<Card.Description>
					<Header size="small" content="Course Topic Highlights" />
					{/* TODO: pull from API, short and long description arrays */}
					<List bulleted content={courseDescription(description.short)} />
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group fluid>
					<Button
						positive
						rounded
						size="large"
						as={Link}
						content="Register Now"
						to={`/register?id=${id}`}
						// style={{ backgroundColor: "var(--primary-light)", color: "white"}}
					/>
					<Button.Or />
					<Button
						as={Link}
						rounded
						size="large"
						content="Learn More"
						to={`/course/${shortName}`}
					/>
				</Button.Group>
			</Card.Content>
		</Card>
	);
};

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

UpcomingCourses.propTypes = {};

UpcomingCourses.defaultProps = {
	courses: [pollutionCourse, remediationCourse],
};

export default UpcomingCourses;
