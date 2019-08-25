import React from "react";
import PropTypes from "prop-types";
import { List, Card, Icon, Header } from "semantic-ui-react";

const ListCard = props => {
  const { header, bulleted, items, icon, iconColor } = props;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header textAlign="center" content={<Header content={header} />} />
        <List divided={!bulleted} bulleted={bulleted} relaxed="very">
          {items.map((item, index) => (
            <List.Item
              content={item}
              key={`${header}-${index}`}
              icon={<Icon name={icon} color={iconColor || "blue"} />}
            />
          ))}
        </List>
      </Card.Content>
    </Card>
  );
};

ListCard.propTypes = {
  bulleted: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ).isRequired,
};

export default ListCard;
