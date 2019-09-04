import React from "react";
import { Grid, Header, Divider, Container, Message } from "semantic-ui-react";

import Testimonial from "./Testimonial";
import { testimonials } from "../../editable-content";
import responsiveWrapper from "../../wrappers/responsiveWrapper";

const CourseTitleHeader = props => (
  <Header as="h2" content={props.title} {...props} />
);

const CourseTitleDivider = props => {
  const { mobile, ...headerProps } = props;

  return mobile ? (
    <CourseTitleHeader {...headerProps} />
  ) : (
    <Divider
      horizontal
      inverted
      content={<CourseTitleHeader {...headerProps} />}
    />
  );
};

const TestimonialView = props => {
  const { mobile } = props;

  const headerProps = {
    inverted: true,
    horizontal: "true", // complains non-boolean prop...
    textAlign: "center",
    className: "header-shadow",
  };

  return (
    <Container>
      <Header as="h2" content="Course Testimonials" {...headerProps} />

      <Message
        compact
        positive
        content={`At the end of every course we ask our students if they would recommend the course to their colleagues. Over the years we have accumulated thousands of positive evaluations and over 90% of our students say they heard about either course through the recommendation of a colleague.
        
        In the interest of space, here is a representative sample of The Pollution & Hydrology Course evaluations with The Remediation Course testimonials to follow.`}
      />

      <Divider hidden />

      <Grid centered>
        <CourseTitleDivider
          mobile={mobile}
          title="The Pollution &amp; Hydrology Course"
          {...headerProps}
        />

        {testimonials.pollution.map(testimonial => (
          <Grid.Row key={`pollution-testimonial-${testimonial.student}`}>
            <Testimonial testimonial={testimonial} />
          </Grid.Row>
        ))}

        <CourseTitleDivider
          mobile={mobile}
          title="The Remediation Course"
          {...headerProps}
        />

        {testimonials.remediation.map(testimonial => (
          <Grid.Row key={`remediation-testimonial-${testimonial.student}`}>
            <Testimonial testimonial={testimonial} />
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  );
};

export default responsiveWrapper(TestimonialView);
