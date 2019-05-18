import React, { Component, createRef } from "react";
import { Ref, Menu, Sidebar, Responsive } from "semantic-ui-react";

import NavMenuLink from "./NavMenuLink";
import navBarPropTypes from "./prop-types";

/**
 * Responsive Mobile NavBar
 * - only renders at SUIR Responsive.onlyMobile.maxWidth
 * - mobile links menu overlays content when activated
 * - links menu extends from bottom of nav bar
 *
 * controls:
 * - Logo click: toggle
 * - content area click: close
 * - NavMenuLink click: close
 *
 * @param {*} props
 * @param {*} content alias for children
 * @param {*} children content area below nav
 * @param {*} links [{ name, path }] for menu links
 * @param {*} Logo Logo component menu controlling button
 */
class MobileNavBar extends Component {
	static propTypes = navBarPropTypes;

	state = {
		menuOpen: false,
	};

	// for closing the menu if content area is clicked
	contentRef = createRef();

	closeMenu = () => this.setState({ menuOpen: false });

	toggleMenu = () => this.setState(state => ({ menuOpen: !state.menuOpen }));

	render = () => {
		const { content, children, links, Logo } = this.props;
		const { menuOpen } = this.state;

		return (
			<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
				{/* nav */}
				<Menu as="nav" size="tiny" widths="1">
					<Menu.Item>
						<Logo mobile onClick={this.toggleMenu} />
					</Menu.Item>
				</Menu>

				<Sidebar.Pushable>
					{/* links menu */}
					<Sidebar
						as={Menu}
						vertical
						direction="top"
						animation="overlay"
						// external click target (content area) that closes the menu
						target={this.contentRef}
						visible={menuOpen}
						onHide={this.closeMenu}
						style={{ textAlign: "center" }}
					>
						{links.map(link => (
							<NavMenuLink
								key={`navlink-${link.name}`}
								onNavigate={this.closeMenu}
								{...link}
							/>
						))}
					</Sidebar>

					{/* content area (links menu will overlay) */}
					<Ref innerRef={this.contentRef}>
						<Sidebar.Pusher content={content || children} />
					</Ref>
				</Sidebar.Pushable>
			</Responsive>
		);
	};
}

export default MobileNavBar;
