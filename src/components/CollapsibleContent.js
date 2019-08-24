import React from "react";
import PropTypes from "prop-types";
import { Accordion, Header, Segment } from "semantic-ui-react";

const CollapsibleContent = props => {
  const { mobile, active, header, content, toggleContent } = props;

  return (
    <Accordion as={Segment} fluid>
      <Accordion.Title active={active} onClick={() => toggleContent()}>
        <Header as={mobile ? "h4" : "h3"} textAlign="center" content={header} />
      </Accordion.Title>
      <Accordion.Content active={active} content={content} />
    </Accordion>
  );
};

CollapsibleContent.propTypes = {
  mobile: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  toggleContent: PropTypes.func.isRequired,
};

CollapsibleContent.defaultProps = {
  mobile: false,
};

export default CollapsibleContent;
