import React from "react";
import { Icon, Card } from "semantic-ui-react";

const valuePropCardData = (() => {
  const iconProps = {
    size: "big",
    style: { color: "var(--primary)" },
  };

  return [
    {
      // "trophy"
      headerIcon: <Icon className="fas fa-trophy" {...iconProps} />,
      description:
        "Taught by award-winning, globally recognized groundwater experts",
    },
    {
      // "microscope" "user-graduate"
      // does not work with <Icon> component, fa-2x == "big"
      headerIcon: <i className="fas fa-microscope fa-2x" {...iconProps} />,
      description:
        "Designed for  Geologists, Engineers, Chemists and Environmental Scientists",
    },
    {
      // "hard-hat" "clipboard-check"
      headerIcon: <Icon className="fas fa-clipboard-check" {...iconProps} />,
      description:
        "Academic & practical principles, technologies, and best practices",
      // version 2 (takes up 3-4 lines, not consistent with other value props)
      // "Comprehensive & practical knowledge of groundwater principles, technologies, and best practices",
    },
    {
      // "university" "graduation-cap"
      headerIcon: <Icon className="fas fa-graduation-cap" {...iconProps} />,
      description: "Board approved for Continuing Education Credits (CEU)",
    },
  ];
})();

export const ValuePropCard = props => {
  const { headerIcon, description } = props;

  return (
    <Card raised color="grey">
      <Card.Content>
        <Card.Header textAlign="center" content={headerIcon} />
        <Card.Description textAlign="center" content={description} />
      </Card.Content>
    </Card>
  );
};

const ValuePropositions = props => {
  const cards = valuePropCardData.map((cardData, index) => (
    <ValuePropCard key={`value-props-${index}`} {...cardData} />
  ));

  return <Card.Group centered stackable itemsPerRow="2" content={cards} />;
};

export default ValuePropositions;
