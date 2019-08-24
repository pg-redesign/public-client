import React from "react";
import PropTypes from "prop-types";
import { List, Card, Icon, Header } from "semantic-ui-react";

const ListCard = props => (
  <Card fluid>
    <Card.Content>
      <Card.Header
        textAlign="center"
        content={<Header content={props.header} />}
      />
      <List divided relaxed="very">
        {props.items.map((item, index) => (
          <List.Item
            content={item}
            key={`${props.header}-${index}`}
            icon={<Icon name={props.icon} color={props.iconColor || "blue"} />}
          />
        ))}
      </List>
    </Card.Content>
  </Card>
);

ListCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  ).isRequired,
};

export default ListCard;
