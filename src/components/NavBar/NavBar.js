import React from "react";

import Logo from "../Logo";
import MobileNavBar from "./MobileNavBar";
import navBarPropTypes from "./prop-types";
import StandardNavBar from "./StandardNavBar";

/**
 * Responsive NavBar, NavBar.Mobile, NavBar.Standard
 * - only renders NavBar.Mobile up to SUIR Responsive.onlyTablet.maxWidth
 * - renders NavBar.Standard for widths above SUIR Responsive.onlyComputer.minWidth
 *
 * @param {*} props spread into NavBar.Mobile and NavBar.Standard
 * @param {*} content alias for children
 * @param {*} children content area below nav
 * @param {*} links [{ name, path }] for menu links
 * @param {*} Logo Logo component menu controlling button
 */
const NavBar = props => (
	<>
		<MobileNavBar {...props} />
		<StandardNavBar {...props} />
	</>
);

NavBar.propTypes = navBarPropTypes;

NavBar.defaultProps = {
	Logo,
};

NavBar.Mobile = MobileNavBar;
NavBar.Standard = StandardNavBar;
export default NavBar;
