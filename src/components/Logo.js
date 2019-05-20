import React from "react";
import PropTypes from "prop-types";
import { Image, Button } from "semantic-ui-react";

/**
 * spreads all props into SUIR Image
 * @param {*} props
 * @param {string} props.size "mini"
 * @param {string} props.logoImage loaded image file
 * @param {*} props.style boxShadow fitting "mini" size
 */
export const LogoImage = props => {
	const { logoImage, ...otherProps } = props;

	return <Image {...otherProps} src={logoImage} />;
};

LogoImage.propTypes = {
  logoImage: PropTypes.string.isRequired,
};

LogoImage.defaultProps = {
  size: "mini",
  logoImage: require("../media/logo.jpg"),
	style: { boxShadow: "2px 2px 3px 1px rgba(0,0,0,0.4)" },
};

/**
 * spreads all props into SUIR Button
 * @param {*} props.onClick
 * @param {string} props.size "mini"
 * @param {boolean} props.compact true
 * @param {boolean} props.borderless true
 * @param {string} props.logoImage loaded image file
 * @param {*} props.content <LogoImage>
 */
export const LogoButton = props => {
	const { logoImage, ...buttonProps } = props;

	return (
		<Button {...buttonProps}>
			<LogoImage logoImage={logoImage} />
		</Button>
	);
};

// TODO: why doesnt <Button {...props} content/children={LogoImage} /> work?
// only if content={<LogoImage />} or as explicit child

LogoButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

LogoButton.defaultProps = {
	size: "mini",
	compact: true,
	borderless: "true",
};

/**
 * Responsive Logo
 * - spreads all props
 * @param {*} props
 * @param props.mobile true: <LogoButton>, false: <LogoImage>
 * @param props.logoImage loaded image file, default: require("src/media/logo.jpg")
 */
const Logo = props => {
	const { mobile, ...componentProps } = props;

	return mobile ? (
		<LogoButton {...componentProps} />
	) : (
		<LogoImage {...componentProps} />
	);
};

Logo.propTypes = {
	mobile: PropTypes.bool,
	logoImage: PropTypes.string.isRequired,
};

Logo.Image = LogoImage;
Logo.Button = LogoButton;
export default Logo;
