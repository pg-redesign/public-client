import React from "react";
import PropTypes from "prop-types";
import { Icon, Label } from "semantic-ui-react";

import siteLinks from "../site-links";
import { instructorType } from "../../editable-content/instructors";
import { convertToFullName } from "../../utils/format-editable-content";

export const ProfileImage = props => (
  <div
    style={{
      width: "auto",
      height: "250px",
      margin: "10px 10px",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${props.image})`,
    }}
    alt={`instructor ${props.name} profile image`}
  />
);

ProfileImage.propTypes = {
  name: instructorType.name,
  image: instructorType.image,
};

export const CourseLabels = props => (
  <Label.Group>
    {props.courses.map(courseShortName => (
      <Label
        content={convertToFullName(courseShortName)}
        href={`${siteLinks.COURSES}/${courseShortName}`}
        color={courseShortName === "pollution" ? "blue" : "brown"}
      />
    ))}
  </Label.Group>
);

CourseLabels.propTypes = {
  courses: instructorType.courses,
};

export const ProfileLink = props => (
  <a href={props.profileLink} target="_blank" rel="noopener noreferrer">
    <Icon name="chain" /> professional profile
  </a>
);

ProfileLink.propTypes = {
  profileLink: instructorType.profileLink,
};
