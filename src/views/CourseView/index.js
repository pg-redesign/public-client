import React, { createRef } from "react";
import { Grid, Ref, Header, Sticky, Message } from "semantic-ui-react";

import editableContent from "../../editable-content";
import responsiveWrapper from "../../wrappers/responsiveWrapper";
import withUpcomingCourses from "../../wrappers/withUpcomingCourses";

import RegisterNow from "./RegisterNow";
import CourseTopics from "./CourseTopics";
import { NoCourseAvailable, ListCard } from "../../components";

const boldFirstWord = item => {
  const [title, content] = item.split(": ");

  return (
    <>
      <b>{title}:</b> {content}
    </>
  );
};

const addLineBreaks = content =>
  content.split("\n").reduce((sections, section) => (
    <>
      {sections}
      <br />
      {section}
    </>
  ));

const CourseView = props => {
  const { data, match, mobile } = props;
  const { courseShortName } = match.params;
  const courseContent = editableContent[courseShortName];

  const title =
    courseShortName === "pollution"
      ? "The Pollution & Hydrology Course"
      : "The Remediation Course";

  // const availableCourse = data.courses.find(
  //   course => course.shortName === courseShortName.toUpperCase(),
  // );
  const availableCourse = null;

  const contextRef = createRef();

  // standard view
  return (
    <Ref innerRef={contextRef}>
      <Grid container stackable centered columns={2}>
        <Header
          as="h2"
          inverted
          content={title}
          textAlign="center"
          className="header-shadow"
        />

        <Grid.Column width="11">
          {/* content */}
          <Message info content={addLineBreaks(courseContent.overview)} />
          <ListCard
            header="What Makes Our Courses Unique"
            items={courseContent.uniqueAspects}
          />
          <Grid columns="2" stackable>
            <Grid.Column>
              <ListCard
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
          {/* <CourseTopics topics={courseContent.topics} /> */}
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

CourseView.propTypes = {};
CourseView.defaultProps = {
  data: {
    courses: [],
  },
};
export default responsiveWrapper(withUpcomingCourses(CourseView));
