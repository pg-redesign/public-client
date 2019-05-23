import React from "react";
import { Header, Container } from "semantic-ui-react";

import Logo from "../../components/Logo";

const defaultProps = {
	bannerPhrase:
		"Teaching the World About Groundwater Hydrology, Pollution, & Remediation since 1974",
	// version 2
	// "World-renowned Hydrology, Pollution, & Remediation courses",
};

const Banner = props => {
	const { mobile, bannerPhrase } = props;

	return (
		<Container textAlign="center" fluid>
			{/* only renders Logo above mobile */}
			{!mobile && (
				<Logo.Image
					rounded
					centered
					size="small"
					style={{
						border: "white 2px double",
						boxShadow: "2px 2px 3px 1px rgba(0,0,0,0.4)",
					}}
				/>
			)}
			{/* site name - uppercased by global CSS */}
			<Header as="h1" inverted content="Princeton Groundwater" />
			{/* banner phrase */}
			<Header
				as="h3"
				inverted
				content={bannerPhrase}
				style={{ fontStyle: "oblique" }}
			/>
		</Container>
	);
};

Banner.defaultProps = defaultProps;

export default Banner;
