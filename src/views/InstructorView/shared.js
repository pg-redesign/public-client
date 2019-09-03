import React from "react";
import { Link } from "react-router-dom";
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

export const ProfileLink = props => (
  <a href={props.profileLink} target="_blank" rel="noopener noreferrer">
    <Icon name="chain" /> professional profile
  </a>
);

ProfileLink.propTypes = {
  profileLink: instructorType.profileLink,
};

const formatCourseLabelData = courses =>
  courses.map(shortName => {
    const courseLabel = {
      courseName: convertToFullName(shortName),
      courseLink: `${siteLinks.COURSES}/${shortName}`,
    };

    switch (shortName) {
      case "pollution":
        return {
          ...courseLabel,
          labelColor: "blue",
        };
      case "remediation":
        return {
          ...courseLabel,
          labelColor: "brown",
        };
      case "brasil":
        return {
          ...courseLabel,
          labelColor: "green",
        };
      default:
        return null;
    }
  });

export const CourseLabels = props => {
  const { name, courses } = props;

  const courseLabelData = formatCourseLabelData(courses);

  return (
    <Label.Group>
      {courseLabelData.map(
        labelData =>
          // nulls are ignored (invalid format)
          labelData && (
            <Label
              as={Link}
              to={labelData.courseLink}
              color={labelData.labelColor}
              content={labelData.courseName}
              key={`${name}-${labelData.courseName}-label`}
            />
          ),
      )}
    </Label.Group>
  );
};

CourseLabels.propTypes = {
  name: instructorType.name,
  courses: instructorType.courses,
};
