import React, { createRef } from "react";
import PropTypes from "prop-types";
import { Grid, Ref, Header, Sticky, Message } from "semantic-ui-react";

import { courseTypeShape } from "../../utils/prop-types";
import { courseContentTypeShape } from "../../editable-content";
import {
  boldFirstWord,
  addLineBreaks,
} from "../../utils/format-editable-content";

import RegisterNow from "./RegisterNow";
import CourseTopics from "./CourseTopics";
import { NoCourseAvailable, ListCard } from "../../components";

const propTypes = {
  availableCourse: courseTypeShape.isRequired,
  courseFullName: PropTypes.string.isRequired,
  courseContent: courseContentTypeShape.isRequired,
};

const StandardCourseView = props => {
  const { courseFullName, courseContent, availableCourse } = props;

  const contextRef = createRef();

  return (
    <Ref innerRef={contextRef}>
      <Grid stackable centered columns={2}>
        <Header
          as="h2"
          inverted
          textAlign="center"
          content={courseFullName}
          className="header-shadow"
        />

        <Grid.Column width="11">
          <Message info content={addLineBreaks(courseContent.overview)} />

          <ListCard
            icon="star"
            iconColor="yellow"
            header="Why Our Courses Are Unique"
            items={courseContent.uniqueAspects}
          />

          <Grid columns="2" stackable>
            <Grid.Column>
              <ListCard
                icon="checkmark"
                header="Who Should Attend"
                items={courseContent.whoShouldAttend}
              />
            </Grid.Column>

            <Grid.Column>
              <ListCard
                header="Course Schedule"
                items={courseContent.schedule.map(boldFirstWord)}
              />
            </Grid.Column>
          </Grid>

          <Message>
            <Header as="h3" textAlign="center" content="Course Description" />
            {addLineBreaks(courseContent.longDescription)}
          </Message>

          <CourseTopics topics={courseContent.topics} />
        </Grid.Column>

        <Grid.Column width="5">
          <Sticky pushing offset={50} context={contextRef}>
            {availableCourse ? (
              <RegisterNow course={availableCourse} />
            ) : (
              <NoCourseAvailable
                attached
                header="Sorry, this course is not open for registration at this time."
              />
            )}
          </Sticky>
        </Grid.Column>
      </Grid>
    </Ref>
  );
};

StandardCourseView.propTypes = propTypes;
export default StandardCourseView;
