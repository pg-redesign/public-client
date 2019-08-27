import React from "react";
import { Grid, Header, Divider, Container } from "semantic-ui-react";

import Testimonial from "./Testimonial";
import { testimonials } from "../../editable-content";

const TestimonialView = () => {
  const headerProps = {
    inverted: true,
    textAlign: "center",
    className: "header-shadow",
  };

  return (
    <Container>
      <Header
        as="h2"
        content="We have thousands of positive testimonials"
        {...headerProps}
      />
      <Header
        as="h3"
        {...headerProps}
        style={{ fontStyle: "oblique", margin: "0px" }}
        content="Here are some of our favorites"
      />

      <Divider />

      <Grid centered>
        {testimonials.map(testimonial => (
          <Grid.Row>
            <Testimonial testimonial={testimonial} />
          </Grid.Row>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialView;
