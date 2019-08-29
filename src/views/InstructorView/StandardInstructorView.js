import React from "react";
import PropTypes from "prop-types";
import { Grid, Card } from "semantic-ui-react";

import { instructorTypeShape } from "../../editable-content/instructors";

import { ListCard } from "../../components";
import { ProfileImage, ProfileLink, CourseLabels } from "./shared";

const InstructorContainer = props => {
  const { name, bio, image, courses, profileLink } = props.instructor;

  return (
    <Grid.Row columns={2}>
      <Grid.Column width="4">
        <Card>
          <ProfileImage image={image} name={name} />

          <Card.Content textAlign="center">
            <Card.Header textAlign="center" content={name} />
            <Card.Description
              content={<ProfileLink profileLink={profileLink} />}
            />
          </Card.Content>

          <Card.Content
            extra
            textAlign="center"
            content={<CourseLabels name={name} courses={courses} />}
          />
        </Card>
      </Grid.Column>
      <Grid.Column width="12" verticalAlign="middle">
        <ListCard items={bio} />
      </Grid.Column>
    </Grid.Row>
  );
};

InstructorContainer.propTypes = {
  instructor: instructorTypeShape.isRequired,
};

const StandardInstructorView = props => {
  const { instructors } = props;

  return (
    <Grid>
      {instructors.map(instructor => (
        <InstructorContainer key={instructor.name} instructor={instructor} />
      ))}
    </Grid>
  );
};

StandardInstructorView.propTypes = {
  instructors: PropTypes.arrayOf(instructorTypeShape).isRequired,
};

export default StandardInstructorView;
