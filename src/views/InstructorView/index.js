import React from "react";
import PropTypes from "prop-types";
import { Header, Divider } from "semantic-ui-react";

import { responsiveWrapper } from "../../wrappers";
import { instructors } from "../../editable-content";

import MobileInstructorView from "./MobileInstructorView";
import StandardInstructorView from "./StandardInstructorView";

const InstructorView = props => {
  const { mobile } = props;

  return (
    <div>
      <Header
        as="h2"
        inverted
        textAlign="center"
        className="header-shadow"
        content="Our Instructors"
      />

      <Divider />

      {mobile ? (
        <MobileInstructorView instructors={instructors} />
      ) : (
        <StandardInstructorView instructors={instructors} />
      )}
    </div>
  );
};

InstructorView.propTypes = {
  mobile: PropTypes.bool,
};

export default responsiveWrapper(InstructorView);
