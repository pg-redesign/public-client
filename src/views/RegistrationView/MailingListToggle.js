import React from "react";
import PropTypes from "prop-types";
import { Form, Divider, Message } from "semantic-ui-react";

const MailingListToggle = props => {
  const { mailingListField, onToggle } = props;

  return (
    <Message compact positive>
      <Message.Header content="Would you like to join our mailing list?" />
      <Message.List>
        <Message.Item>
          We will <strong>never spam or sell</strong> your contact information
        </Message.Item>
        <Message.Item>
          We <strong>only send 4-5 emails per year</strong> about upcoming
          courses and web events
        </Message.Item>
      </Message.List>
      <Divider />
      <Form.Checkbox
        toggle
        name="mailingList"
        onClick={onToggle}
        checked={mailingListField}
      />
    </Message>
  );
};

MailingListToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  mailingListField: PropTypes.bool.isRequired,
};

export default MailingListToggle;
