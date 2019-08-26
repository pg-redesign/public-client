import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

import { instructorTypeShape } from "../../editable-content/instructors";

import { ListCard, CollapsibleContent } from "../../components";
import { ProfileImage, ProfileLink, CourseLabels } from "./shared";

const InstructorCard = props => {
  const { name, bio, image, courses, profileLink } = props.instructor;

  const [bioContentVisible, setBioContentVisible] = useState(false);
  const toggleContent = () => setBioContentVisible(!bioContentVisible);

  return (
    <Card>
      <ProfileImage image={image} name={name} />

      <Card.Content textAlign="center">
        <Card.Header content={name} />
        <Card.Description content={<ProfileLink profileLink={profileLink} />} />
      </Card.Content>

      <Card.Content
        extra
        textAlign="center"
        content={<CourseLabels courses={courses} />}
        style={{ paddingBottom: "0px", marginBottom: "0px" }}
      />

      <CollapsibleContent
        header="Biography"
        active={bioContentVisible}
        toggleContent={toggleContent}
        content={<ListCard items={bio} />}
      />
    </Card>
  );
};

InstructorCard.propTypes = {
  instructor: instructorTypeShape.isRequired,
};

const MobileInstructorView = props => {
  const { instructors } = props;

  return (
    <Card.Group
      centered
      stackable
      itemsPerRow={1}
      content={instructors.map(instructor => (
        <InstructorCard key={instructor.name} instructor={instructor} />
      ))}
    />
  );
};

MobileInstructorView.propTypes = {
  instructors: PropTypes.arrayOf(instructorTypeShape).isRequired,
};

export default MobileInstructorView;
