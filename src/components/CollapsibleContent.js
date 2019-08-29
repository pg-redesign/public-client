import React from "react";
import PropTypes from "prop-types";
import { Accordion, Header, Segment } from "semantic-ui-react";

const CollapsibleContent = props => {
  const {
    mobile,
    active,
    header,
    content,
    subHeader,
    subContent,
    alignHeader,
    toggleContent,
  } = props;

  let headerSize = 3; // h3
  if (mobile) headerSize++; // h4
  if (subContent) headerSize++; // h4, h5 on mobile

  return (
    <Accordion as={Segment} fluid>
      <Accordion.Title active={active} onClick={() => toggleContent()}>
        <Header
          as={`h${headerSize}`}
          textAlign={alignHeader}
          style={{ margin: "0px 10px 0px 10px" }}
        >
          {header}
          {subHeader && <Header.Subheader content={subHeader} />}
        </Header>
      </Accordion.Title>
      <Accordion.Content active={active} content={content} />
    </Accordion>
  );
};

CollapsibleContent.propTypes = {
  mobile: PropTypes.bool,
  subHeader: PropTypes.string,
  active: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  toggleContent: PropTypes.func.isRequired,
  alignHeader: PropTypes.oneOf(["left", "right", "center"]),
};

CollapsibleContent.defaultProps = {
  mobile: false,
  alignHeader: "center",
  subHeader: "(click to expand)",
};

export default CollapsibleContent;
