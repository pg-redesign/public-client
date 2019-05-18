import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { Ref, Menu, Sidebar, Responsive } from "semantic-ui-react";

import Logo from "./Logo";
import NavMenuLink from "./NavMenuLink";

const propTypes = {
	children: PropTypes.node.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		}),
	).isRequired,
};

class NavBar extends Component {
	state = {
		mobileMenuOpen: false,
	};

	// for closing the menu if content area is clicked
	contentRef = createRef();

	closeMobileMenu = () => this.setState({ mobileMenuOpen: false });

	toggleMobileMenu = () =>
		this.setState(state => ({ mobileMenuOpen: !state.mobileMenuOpen }));

	renderMobile = () => {
		const { mobileMenuOpen } = this.state;
		const { links, children } = this.props;

		/**
		 * mobile menu overlays content
		 *
		 * controls:
		 * - logo click: toggle
		 * - content area click: close
		 * - mobile menu item (link) click: close
		 */

		return (
			<>
				<Menu as="nav" size="tiny" widths="1">
					<Menu.Item>
						<Logo mobile onClick={this.toggleMobileMenu} />
					</Menu.Item>
				</Menu>
				<Sidebar.Pushable>
					{/* mobile menu */}
					<Sidebar
						as={Menu}
						vertical
						direction="top"
						animation="overlay"
						// external click target (content area) that closes the menu
						target={this.contentRef}
						visible={mobileMenuOpen}
						onHide={this.closeMobileMenu}
						style={{ textAlign: "center" }}
					>
						{links.map(link => (
							<NavMenuLink
								key={`navlink-${link.name}`}
								onNavigate={this.closeMobileMenu}
								{...link}
							/>
						))}
					</Sidebar>

					{/* content area (sidebar will overlay) */}
					<Ref innerRef={this.contentRef}>
						<Sidebar.Pusher>{children}</Sidebar.Pusher>
					</Ref>
				</Sidebar.Pushable>
			</>
		);
	};

	renderStandard = () => {
		const { links, children } = this.props;

		return (
			<>
				<Menu as="nav" fluid borderless>
					<Menu.Menu widths={links.length} position="left">
						{links.map(link => (
							<NavMenuLink key={`navlink-${link.name}`} {...link} />
						))}
					</Menu.Menu>
					<Menu.Item position="right">
						<Logo size="small" />
					</Menu.Item>
				</Menu>
				{children}
			</>
		);
	};

	render = () => (
		<>
			<Responsive
				children={this.renderMobile()}
				maxWidth={Responsive.onlyMobile.maxWidth}
			/>
			<Responsive
				children={this.renderStandard()}
				minWidth={Responsive.onlyTablet.minWidth}
			/>
		</>
	);
}

NavBar.propTypes = propTypes;

export default NavBar;
