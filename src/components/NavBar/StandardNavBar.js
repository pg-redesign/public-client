import React from "react";
import { Menu, Responsive } from "semantic-ui-react";

import NavMenuLink from "./NavMenuLink";
import navBarPropTypes from "./prop-types";

/**
 * Responsive Standard NavBar
 * - renders at widths above SUIR Responsive.onlyTablet.minWidth
 * 
 * @param {*} props
 * @param {*} content alias for children
 * @param {*} children content area below nav
 * @param {*} links [{ name, path }] for menu links
 * @param {*} Logo Logo component menu controlling button 
 */
const StandardNavBar = props => {
	const { links, content, children, Logo } = props;

	return (
		<Responsive minWidth={Responsive.onlyTablet.minWidth}>
			{/* nav */}
			<Menu as="nav" fluid borderless size="huge">
				<Menu.Menu widths={links.length} position="left">
					{links.map(link => (
						<NavMenuLink key={`navlink-${link.name}`} {...link} />
					))}
				</Menu.Menu>
				<Menu.Item position="right">
					<Logo />
				</Menu.Item>
			</Menu>

      {/* content area */}
			{content || children}
		</Responsive>
	);
};

StandardNavBar.propTypes = navBarPropTypes;

export default StandardNavBar;
