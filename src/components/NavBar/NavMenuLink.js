import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

/**
 * NavBar SUIR Menu as React Router Link
 * @param {*} props
 * @param {string} props.path Link to
 * @param {string} props.name Link content
 * @param {func} props.onNavigate onClick handler
 */
const NavMenuLink = props => (
  <Menu.Item
    as={Link}
    to={props.path}
    content={props.first ? <b>{props.name}</b> : props.name}
    onClick={props.onNavigate}
  />
);

NavMenuLink.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavMenuLink;
