import React from "react";
import { Card } from "semantic-ui-react";

const valuePropCardData = (() => {
  const iconProps = {
    size: "big",
    style: { color: "var(--primary)" },
  };

  return [
    {
      headerIcon: <i className="fas fa-graduation-cap fa-2x" {...iconProps} />,
      description: (
        <>
          The largest groundwater courses in the industry with over{" "}
          <strong>25,000 graduates</strong>
        </>
      ),
    },
    {
      headerIcon: <i className="fas fa-globe-americas fa-2x" {...iconProps} />,
      description:
        "Taught by globally recognized experts in groundwater hydrology & remediation",
    },
    {
      headerIcon: <i className="fas fa-clipboard-check fa-2x" {...iconProps} />,
      description:
        "Continously updated groundwater concepts, principles, technologies, and best practices",
    },
    {
      headerIcon: <i className="fas fa-university fa-2x" {...iconProps} />,
      description:
        "Designed for  Geologists, Engineers, Chemists and Environmental Scientists",
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
