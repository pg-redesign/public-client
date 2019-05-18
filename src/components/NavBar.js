import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	Ref,
	Menu,
	Image,
	Button,
	Sidebar,
	Responsive,
} from "semantic-ui-react";

import logo from "../media/logo.jpg";

const rootDiv = document.querySelector("#root");

const propTypes = {
	children: PropTypes.node.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		}),
	).isRequired,
};

const NavMenuLink = props => (
	<Menu.Item
		as={Link}
		to={props.path}
		content={props.name}
		onClick={props.onNavigate}
	/>
);

const Logo = props => {
	const { mobile, onClick } = props;

	const LogoImage = (
		<Image
			size="mini"
			src={logo}
			style={{ boxShadow: "2px 2px 3px 1px rgba(0,0,0,0.4)" }}
		/>
	);

	return mobile ? (
		<Button
			size="mini"
			borderless
			compact
			onClick={onClick}
			content={LogoImage}
		/>
	) : (
		LogoImage
	);
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

	// toggles padding if screen transitions in width
	setRootDivPadding = (_, data) => {
		const { getWidth } = data;
		rootDiv.style =
			getWidth() > Responsive.onlyMobile.maxWidth
				? "padding: 30px 50px 0px 50px" // > mobile max add padding
				: ""; // <= mobile max remove padding
	};

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
				onUpdate={this.setRootDivPadding}
				children={this.renderMobile()}
				maxWidth={Responsive.onlyMobile.maxWidth}
			/>
			<Responsive
				onUpdate={this.setRootDivPadding}
				children={this.renderStandard()}
				minWidth={Responsive.onlyTablet.minWidth}
			/>
		</>
	);
}

NavBar.propTypes = propTypes;

export default NavBar;
