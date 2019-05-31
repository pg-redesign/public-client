import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, List, Popup, Button, Header } from "semantic-ui-react";

import { courseType } from "../utils/prop-types";

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

const makeDescriptionList = (courseId, descriptions) =>
  descriptions.map((description, index) => (
    <List.Item key={`course-${courseId}-description-${index}`}>
      <List.Content content={description} />
    </List.Item>
  ));

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
          <List bulleted content={makeDescriptionList(id, description)} />
        </Card.Description>
      </Card.Content>

      {/* content - register / more info buttons */}
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
    </Card>
  );
};

CourseCard.propTypes = courseType;

CourseCard.Top = CourseCardTop;
export default CourseCard;
