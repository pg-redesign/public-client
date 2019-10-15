import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Icon, List, Popup, Button, Header } from "semantic-ui-react";

import siteLinks from "../views/site-links";
import { courseType } from "../utils/prop-types";
import { courseContent } from "../editable-content";

const NameDateAndLocation = props => {
  const { name, location, date } = props;

  return (
    <Card.Content textAlign="left">
      <Card.Header
        content={name}
        textAlign="center"
        style={{ fontSize: "1.23em" }}
      />
      <Card.Meta textAlign="center">
        {date}
        <br />
        <Popup
          size="tiny"
          position="bottom center"
          content="click to view hotel on Google Maps"
          trigger={
            <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
              <span style={{ color: "#1e70bf" }}>{location.concatenated}</span>
              &nbsp;
              <Icon name="map marker alternate" color="red" />
            </a>
          }
        />
      </Card.Meta>
    </Card.Content>
  );
};

NameDateAndLocation.propTypes = {
  name: courseType.name.isRequired,
  date: courseType.date.isRequired,
  location: courseType.location.isRequired,
};

const RegistrationButton = props => (
  <Button
    as={Link}
    size="large"
    content="Register Now"
    to={`${siteLinks.REGISTRATION}/${props.courseId}`}
    style={{ backgroundColor: "var(--dark-blue)", color: "white" }}
  />
);

const InfoButton = props => (
  <Button
    as={Link}
    size="large"
    content="Learn More"
    to={`${siteLinks.COURSES}/${props.shortName.toLowerCase()}`}
  />
);

const RegistrationAndInfoButtons = props => {
  const { id, shortName } = props;
  return (
    <Card.Content extra>
      <Button.Group fluid>
        <RegistrationButton courseId={id} />
        <Button.Or />
        <InfoButton shortName={shortName} />
      </Button.Group>
    </Card.Content>
  );
};

RegistrationAndInfoButtons.propTypes = {
  id: courseType.id.isRequired,
  shortName: PropTypes.string.isRequired,
};

const CourseTopicHighlights = props => {
  const { shortName } = props;

  const content = courseContent[shortName.toLowerCase()];
  if (!content) return null;

  return (
    <Card.Content textAlign="left">
      <Card.Description>
        <Header size="small" content="Course Topic Highlights" />
        <List
          bulleted
          items={content.courseCard.highlights.map((highlight, index) => (
            <List.Item
              content={highlight}
              key={`${shortName}-course-highlight-${index}`}
            />
          ))}
        />
      </Card.Description>
    </Card.Content>
  );
};

CourseTopicHighlights.propTypes = {
  shortName: courseType.shortName.isRequired,
};

const WhatsIncluded = props => {
  const { shortName } = props;

  const content = courseContent[shortName.toLowerCase()];
  if (!content) return null;

  return (
    <Card.Content textAlign="left">
      <Card.Description>
        <Header size="small" content="Includes" />

        <List bulleted>
          {content.courseCard.includes.map((includedItem, index) => (
            <List.Item
              key={`${shortName}-course-includes-${index}`}
              content={includedItem}
            />
          ))}
        </List>
      </Card.Description>
    </Card.Content>
  );
};

WhatsIncluded.propTypes = {
  shortName: courseType.shortName.isRequired,
};

const CoursePrice = props => {
  const { price } = props;

  return (
    <Card.Content textAlign="center" style={{ color: "black" }}>
      <Icon name="dollar sign" color="green" fitted />
      {price} USD
    </Card.Content>
  );
};

CoursePrice.propTypes = {
  price: courseType.price.isRequired,
};

const CourseCard = props => {
  const {
    fluid,
    withPrice,
    withTopics,
    withButtons,
    withWhatsIncluded,
    withRegisterButton,
    ...courseData
  } = props;

  return (
    <Card raised color="grey" fluid={fluid}>
      {/* header - name, date, location */}
      <NameDateAndLocation {...courseData} />

      {/* course topic highlights section */}
      {withTopics && <CourseTopicHighlights {...courseData} />}

      {/* whats included section */}
      {withWhatsIncluded && <WhatsIncluded {...courseData} />}

      {/* course price section */}
      {withPrice && <CoursePrice {...courseData} />}

      {/* register / more info buttons section */}
      {withButtons && <RegistrationAndInfoButtons {...courseData} />}

      {/* just registration button */}
      {withRegisterButton && (
        <Card.Content extra textAlign="center">
          <RegistrationButton courseId={courseData.id} />
        </Card.Content>
      )}
    </Card>
  );
};

CourseCard.propTypes = {
  ...courseType,
  fluid: PropTypes.bool,
  withPrice: PropTypes.bool,
  withTopics: PropTypes.bool,
  withButtons: PropTypes.bool,
  withWhatsIncluded: PropTypes.bool,
  withRegisterButton: PropTypes.bool,
};

export default CourseCard;
