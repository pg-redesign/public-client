import React from "react";
import { MenuLink } from "./NavBar";
import { Menu } from "semantic-ui-react";

// TODO: revisit
/**
 * subscribe to newsletter
 * social media [linkedin, youtube]
 * contact help 
 */
const Footer = props => {
	const { links } = props;

	return (
			<Menu size="large" fixed="bottom">
				{links.map(link => (
					<MenuLink {...link} />
				))}
			</Menu>
	);
};

export default Footer;
