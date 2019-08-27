import React from "react";
import { Divider, Comment, Message } from "semantic-ui-react";

import { testimonialTypeShape } from "../../editable-content/testimonials";

const Testimonial = props => {
  const { student, company, message } = props.testimonial;

  return (
    <Message>
      <Comment>
        <Comment.Content>
          <Comment.Text content={message} style={{ textAlign: "left" }} />
          <Divider horizontal>{student}</Divider>
          <Comment.Metadata content={company} style={{ textAlign: "center" }} />
        </Comment.Content>
      </Comment>
    </Message>
  );
};

Testimonial.propTypes = {
  testimonial: testimonialTypeShape.isRequired,
};

export default Testimonial;
