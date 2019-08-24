import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Header, Message } from "semantic-ui-react";

import { courseTypeShape } from "../../utils/prop-types";
import { courseContentType } from "../../editable-content";
import {
  boldFirstWord,
  addLineBreaks,
} from "../../utils/format-editable-content";

import RegisterNow from "./RegisterNow";
import CourseTopics from "./CourseTopics";
import {
  ListCard,
  NoCourseAvailable,
  CollapsibleContent,
} from "../../components";

const propTypes = {
  availableCourse: courseTypeShape.isRequired,
  courseFullName: PropTypes.string.isRequired,
  courseContent: courseContentType.isRequired,
};

const MobileCourseView = props => {
  const { courseFullName, courseContent, availableCourse } = props;

  const [collapsibleStates, setCollapsibleStates] = useState({
    schedule: false,
    overview: false,
    uniqueAspects: true,
    whoShouldAttend: false,
    longDescription: false,
  });

  const toggleContent = sectionTitle => () =>
    setCollapsibleStates({
      ...collapsibleStates,
      [sectionTitle]: !collapsibleStates[sectionTitle],
    });

  return (
    <Grid stackable centered>
      <Header
        as="h2"
        inverted
        textAlign="center"
        content={courseFullName}
        className="header-shadow"
      />

      <Message info content={addLineBreaks(courseContent.overview)} />

      <CollapsibleContent
        header="What Makes Our Courses Unique"
        active={collapsibleStates.uniqueAspects}
        toggleContent={toggleContent("uniqueAspects")}
        content={
          <ListCard
            icon="star"
            iconColor="yellow"
            items={courseContent.uniqueAspects}
          />
        }
      />
      <CollapsibleContent
        header="Who Should Attend"
        active={collapsibleStates.whoShouldAttend}
        toggleContent={toggleContent("whoShouldAttend")}
        content={
          <ListCard icon="checkmark" items={courseContent.whoShouldAttend} />
        }
      />

      <CollapsibleContent
        header="Course Schedule"
        active={collapsibleStates.schedule}
        toggleContent={toggleContent("schedule")}
        content={<ListCard items={courseContent.schedule.map(boldFirstWord)} />}
      />

      <CollapsibleContent
        header="Course Description"
        active={collapsibleStates.longDescription}
        toggleContent={toggleContent("longDescription")}
        content={addLineBreaks(courseContent.longDescription)}
      />

      {/* <CourseTopics topics={courseContent.topics} /> */}
      {availableCourse ? (
        <RegisterNow course={availableCourse} />
      ) : (
        <NoCourseAvailable
          attached
          header="Sorry, this course is not open for registration at this time."
        />
      )}
    </Grid>
  );
};

MobileCourseView.propTypes = propTypes;
export default MobileCourseView;
