import React from "react";
import PropTypes from "prop-types";
import { Accordion, Header, Segment } from "semantic-ui-react";

const CollapsibleContent = props => {
  const { mobile, subContent, active, header, content, toggleContent } = props;

  let headerSize = 3; // h3
  if (mobile) headerSize++; // h4
  if (subContent) headerSize++; // h4, h5 on mobile

  return (
    <Accordion as={Segment} fluid>
      <Accordion.Title active={active} onClick={() => toggleContent()}>
        <Header as={`h${headerSize}`} textAlign="center" content={header} />
      </Accordion.Title>
      <Accordion.Content active={active} content={content} />
    </Accordion>
  );
};

CollapsibleContent.propTypes = {
  mobile: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  toggleContent: PropTypes.func.isRequired,
};

CollapsibleContent.defaultProps = {
  mobile: false,
};

export default CollapsibleContent;
