import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";

import {
  courseContentType,
  courseTopicTypeShape,
} from "../../editable-content/course-content";
import { CollapsibleContent, ListCard } from "../../components";

export const CourseTopic = props => {
  const { header, subTopics } = props.topic;

  const [subTopicsVisibility, setSubTopicsVisibility] = useState(false);

  return (
    <CollapsibleContent
      subContent
      header={header}
      alignHeader="left"
      active={subTopicsVisibility}
      content={<ListCard items={subTopics} bulleted />}
      toggleContent={() => setSubTopicsVisibility(!subTopicsVisibility)}
    />
  );
};

CourseTopic.propTypes = {
  topic: courseTopicTypeShape,
};

const CourseTopics = props => {
  const { topics } = props;

  return (
    <Segment>
      <Header as="h3" textAlign="center" content="Course Topics" />
      {topics.map(topic => (
        <CourseTopic key={`course-topic-${topic.header}`} topic={topic} />
      ))}
    </Segment>
  );
};

CourseTopics.propTypes = {
  topics: courseContentType.topics,
};

CourseTopics.CourseTopic = CourseTopic;
export default CourseTopics;
