import React from "react";
import PropTypes from "prop-types";
import { Image, Button } from "semantic-ui-react";

import logo from "../../media/logo.jpg";

/**
 * spreads all props into SUIR Image
 * @param {*} props
 * @param {string} props.size "mini"
 * @param {string} props.src media/logo.jpg
 * @param {*} props.style boxShadow fitting "mini" size
 */
export const LogoImage = props => <Image {...props} />;

LogoImage.defaultProps = {
	src: logo,
	size: "mini",
	style: { boxShadow: "2px 2px 3px 1px rgba(0,0,0,0.4)" },
};

/**
 * spreads all props into SUIR Button
 * @param {*} props.onClick
 * @param {string} props.size "mini"
 * @param {boolean} props.compact true
 * @param {boolean} props.borderless true
 * @param {*} props.content <LogoImage>
 */
export const LogoButton = props => (
	<Button {...props}>
		<LogoImage />
	</Button>
);

// TODO: why doesnt <Button {...props} content/children={LogoImage} /> work?
// only if content={<LogoImage />} or as explicit child

LogoButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

LogoButton.defaultProps = {
	size: "mini",
	compact: true,
	borderless: true,
};

/**
 * Responsive Logo
 * - spreads all props
 * @param {*} props
 * @param props.mobile true: <LogoButton>, false: <LogoImage>
 */
const Logo = props =>
	props.mobile ? <LogoButton {...props} /> : <LogoImage {...props} />;

Logo.Image = LogoImage;
Logo.Button = LogoButton;

Logo.propTypes = {
	mobile: PropTypes.bool,
};

export default Logo;
