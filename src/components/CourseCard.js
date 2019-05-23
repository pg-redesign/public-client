import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	Icon,
	List,
	Popup,
	Button,
	Header,
} from "semantic-ui-react";

import { courseType } from "../utils/prop-types";

const courseShortDescription = descriptionData =>
	descriptionData.map(description => (
		<List.Item>
			<List.Content content={description} />
		</List.Item>
	));

export const CourseCardTop = props => {
	const { name, location, date } = props;

	return (
		<Card.Content textAlign="left">
			<Card.Header textAlign="center" content={name} />
			<Card.Meta textAlign="center">
				{date}
				{" - "}
				<Popup
					size="tiny"
					position="bottom center"
					content="click to view hotel on Google Maps"
					trigger={
						<a href={location.url} target="_blank" rel="noopener noreferrer">
							{location.city}, {location.state}, {location.country}&nbsp;
							<Icon name="map marker alternate" color="red" />
						</a>
					}
				/>
			</Card.Meta>
		</Card.Content>
	);
};

CourseCardTop.propTypes = {
	name: courseType.name,
	date: courseType.date,
	location: courseType.location,
};

const CourseCard = props => {
	const { id, shortName, description } = props;

	return (
		<Card raised color="grey">
			{/* header - name, date, location */}
			<CourseCardTop {...props} />

			{/* content - short description */}
			<Card.Content extra textAlign="left">
				<Card.Description>
					<Header size="small" content="Course Topic Highlights" />
					{/* TODO: pull from API, short and long description arrays */}
					<List bulleted content={courseShortDescription(description.short)} />
				</Card.Description>
			</Card.Content>

			{/* content - register / more info buttons */}
			<Card.Content extra>
				<Button.Group fluid>
					<Button
						color="blue"
						rounded
						size="large"
						as={Link}
						content="Register Now"
						to={`/register?courseID=${id}`}
						// style={{ backgroundColor: "var(--primary-light)", color: "white"}}
					/>
					<Button.Or />
					<Button
						as={Link}
						rounded
						size="large"
						content="Learn More"
						to={`/courses/${shortName}`}
					/>
				</Button.Group>
			</Card.Content>
		</Card>
	);
};

CourseCard.propTypes = courseType;

CourseCard.Top = CourseCardTop;
export default CourseCard;
