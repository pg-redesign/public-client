import React, { Component, createRef } from "react";
import { Ref, Menu, Sidebar, Responsive, Popup } from "semantic-ui-react";

import NavMenuLink from "./NavMenuLink";
import navBarPropTypes from "./prop-types";

/**
 * Responsive Mobile NavBar
 * - only renders up to SUIR Responsive.onlyTablet.maxWidth
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
    disableNavigationNote: false,
  };

  // for closing the menu if content area is clicked
  contentRef = createRef();

  closeMenu = () => this.setState({ menuOpen: false });

  toggleMenu = () =>
    this.setState(state => ({
      menuOpen: !state.menuOpen,
      disableNavigationNote: true,
    }));

  render = () => {
    const { menuOpen, disableNavigationNote } = this.state;
    const { content, children, links, Logo } = this.props;

    return (
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        {/* nav */}
        <Menu as="nav" size="tiny" widths="1">
          <Menu.Item>
            <Popup
              size="tiny"
              position="right center"
              header="click for navigation"
              open={!disableNavigationNote}
              disabled={disableNavigationNote}
              trigger={<Logo mobile onClick={this.toggleMenu} />}
            />
          </Menu.Item>
        </Menu>

        <Sidebar.Pushable style={{ marginTop: "-15px" }}>
          {/* links menu */}
          <Sidebar
            as={Menu}
            vertical
            direction="top"
            animation="overlay"
            // external click target (content area) that closes the menu
            visible={menuOpen}
            onHide={this.closeMenu}
            target={this.contentRef}
          >
            {links.map((link, index) => (
              <NavMenuLink
                first={index === 0}
                onNavigate={this.closeMenu}
                key={`navlink-${link.name}`}
                {...link}
              />
            ))}
          </Sidebar>

          {/* content area (links menu will overlay) */}
          <Ref innerRef={this.contentRef}>
            <Sidebar.Pusher
              content={content || children}
              style={{ paddingTop: "15px" }}
            />
          </Ref>
        </Sidebar.Pushable>
      </Responsive>
    );
  };
}

export default MobileNavBar;
