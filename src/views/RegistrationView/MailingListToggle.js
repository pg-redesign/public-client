import React from "react";
import PropTypes from "prop-types";
import { Form, Divider, Message } from "semantic-ui-react";

import { NewsletterPledge } from "../../components";

const MailingListToggle = props => {
  const { mailingListField, onToggle } = props;

  return (
    <Message compact positive>
      <Message.Header content="Join our mailing list?" />
      <NewsletterPledge />
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
