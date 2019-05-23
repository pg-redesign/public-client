import React from "react";
import { MenuLink } from "./NavBar";
import { Menu } from "semantic-ui-react";

// TODO: revisit
/**
 * the mobile navbar button is not intuitive
 * links at footer then secondary row for normal footer?
 * convert mobile navbar to normal then normal footer?
 * 
 * subscribe to newsletter
 * social media [linkedin, youtube]
 * contact help 
 */
const Footer = props => {
	const { links } = props;

	return (
			<Menu size="large" style={{ bottom: "0px"}}>
				{links.map(link => (
					<MenuLink {...link} />
				))}
			</Menu>
	);
};

export default Footer;
