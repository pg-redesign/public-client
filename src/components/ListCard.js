import React from "react";
import PropTypes from "prop-types";
import { List, Card, Header } from "semantic-ui-react";

const ListCard = props => (
  <Card fluid>
    <Card.Content>
      <Card.Header
        textAlign="center"
        content={<Header content={props.header} />}
      />
      <List divided>
        {props.items.map(item => (
          <List.Item content={item} />
        ))}
      </List>
    </Card.Content>
  </Card>
);

ListCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ListCard.defaultProps = {};

export default ListCard;
