import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Icon, List, Popup, Button, Header } from "semantic-ui-react";

import { courseType, courseTypeShape } from "../utils/prop-types";

// TODO: whats included section for payment page
// 1300 page notes, CEUs, digital certificate

export const CourseCardTop = props => {
  const { name, location, date } = props;

  return (
    <Card.Content textAlign="left">
      <Card.Header textAlign="center" content={name} />
      <Card.Meta textAlign="center">
        {date}
        <br />
        <Popup
          size="tiny"
          position="bottom center"
          content="click to view hotel on Google Maps"
          trigger={
            <a href={location.mapURL} target="_blank" rel="noopener noreferrer">
              {location.concatenated}&nbsp;
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

export const CourseCardShort = props => {
  const { course, includePrice, ...cardProps } = props;

  return (
    <Card color="grey" raised {...cardProps}>
      <CourseCardTop {...course} />
      {includePrice && (
        <Card.Content textAlign="center" style={{ color: "black" }}>
          <Icon name="dollar sign" color="green" fitted />
          {course.price} USD
        </Card.Content>
      )}
    </Card>
  );
};

CourseCardShort.propTypes = {
  course: courseTypeShape,
  includePrice: PropTypes.bool,
};

const CourseCardButtons = props => {
  const { id, shortName } = props;
  return (
    <Card.Content extra>
      <Button.Group fluid>
        <Button
          as={Link}
          size="large"
          content="Register Now"
          to={`/register/${id}`}
          style={{ backgroundColor: "var(--dark-blue)", color: "white" }}
        />
        <Button.Or />
        <Button
          as={Link}
          size="large"
          content="Learn More"
          to={`/courses/${shortName}`}
        />
      </Button.Group>
    </Card.Content>
  );
};

const makeDescriptionList = (courseId, descriptions) =>
  descriptions.map((description, index) => (
    <List.Item key={`course-${courseId}-description-${index}`}>
      <List.Content content={description} />
    </List.Item>
  ));

const CourseCard = props => {
  const { id, description, withButtons, fluid } = props;

  return (
    <Card raised color="grey" fluid={fluid}>
      {/* header - name, date, location */}
      <CourseCardTop {...props} />

      {/* content - short description */}
      <Card.Content extra textAlign="left">
        <Card.Description>
          <Header size="small" content="Course Topic Highlights" />
          <List bulleted content={makeDescriptionList(id, description)} />
        </Card.Description>
      </Card.Content>

      {/* content - register / more info buttons */}
      {withButtons && <CourseCardButtons {...props} />}
    </Card>
  );
};

CourseCard.propTypes = courseType;
CourseCard.defaultProps = {
  withButtons: true,
};

CourseCard.Top = CourseCardTop;
CourseCard.Short = CourseCardShort;
export default CourseCard;
