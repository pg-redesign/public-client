import React, { useState } from "react";
import { Segment, Header } from "semantic-ui-react";

import {
  courseContentType,
  courseTopicTypeShape,
} from "../../editable-content/course-content";
import { CollapsibleContent, ListCard } from "../../components";
import { addSubscript } from "../../utils/format-editable-content";

export const CourseTopic = props => {
  const { header, subTopics } = props.topic;

  const [subTopicsVisibility, setSubTopicsVisibility] = useState(false);

  return (
    <CollapsibleContent
      subContent
      header={header}
      alignHeader="center"
      active={subTopicsVisibility}
      content={
        <ListCard
          items={subTopics.map(subTopic =>
            subTopic.match(/_[a-z0-9]+/gim) ? addSubscript(subTopic) : subTopic,
          )}
          bulleted
        />
      }
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
