import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Icon, List, Popup, Button, Header } from "semantic-ui-react";

import siteLinks from "../views/site-links";
import { courseType } from "../utils/prop-types";

const NameDateAndLocation = props => {
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
            <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
              {location.concatenated}&nbsp;
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

const RegistrationAndInfoButtons = props => {
  const { id, shortName } = props;
  return (
    <Card.Content extra>
      <Button.Group fluid>
        <Button
          as={Link}
          size="large"
          content="Register Now"
          to={`${siteLinks.REGISTRATION}/${id}`}
          style={{ backgroundColor: "var(--dark-blue)", color: "white" }}
        />
        <Button.Or />
        <Button
          as={Link}
          size="large"
          content="Learn More"
          to={`${siteLinks.COURSES}/${shortName.toLowerCase()}`}
        />
      </Button.Group>
    </Card.Content>
  );
};

RegistrationAndInfoButtons.propTypes = {
  id: courseType.id.isRequired,
  shortName: PropTypes.string.isRequired,
};

const CourseTopicHighlights = props => {
  const { id, description } = props;

  const descriptionItems = description.map((description, index) => (
    <List.Item
      content={description}
      key={`course-${id}-description-${index}`}
    />
  ));

  return (
    <Card.Content textAlign="left">
      <Card.Description>
        <Header size="small" content="Course Topic Highlights" />
        <List bulleted items={descriptionItems} />
      </Card.Description>
    </Card.Content>
  );
};

CourseTopicHighlights.propTypes = {
  id: courseType.id.isRequired,
  description: courseType.description.isRequired,
};

const WhatsIncluded = props => {
  const { shortName } = props;

  return (
    <Card.Content textAlign="left">
      <Card.Description>
        <Header size="small" content="Includes" />

        <List bulleted>
          <List.Item content="Digital certificate of completion" />
          <List.Item
            content={`${
              shortName === "POLLUTION" ? "38" : "40"
            } continuing education units (CEU)`}
          />
          <List.Item
            content={
              // <>
              //   <strong>1300+ page course binder</strong> with an unmatched
              //   wealth of information from over 40 years of teaching and
              //   consulting
              // </>
              <>
                <strong>1300+ page course binder</strong> with an unmatched
                wealth of information
              </>
            }
          />
        </List>
      </Card.Description>
    </Card.Content>
  );
};

WhatsIncluded.propTypes = {
  shortName: PropTypes.string.isRequired,
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
};

export default CourseCard;
