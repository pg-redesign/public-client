import React from "react";
import { Container, Embed, Header, Responsive, Grid } from "semantic-ui-react";

import Logo from "../components/Logo";

// fallback data
const defaultProps = {
	data: {
		viewData: {
			videoID: "Ztk3Q9sTy84",
			bannerPhrase:
				"World-renowned Hydrology, Pollution, & Remediation courses",
		},
	},
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
			<Header
				as="h1"
				inverted
				content="Princeton Groundwater"
				style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
			/>
			{/* banner phrase */}
			<Header
				as="h3"
				inverted
				content={bannerPhrase}
				style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.2)" }}
			/>
		</Container>
	);
};

Banner.defaultProps = {
	bannerPhrase: "World-renowned Hydrology, Pollution, & Remediation courses",
};

const LandingView = props => {
	const { mobile, data } = props;
	const { ...viewData } = data.viewData; // TODO: define schema / shape

	return (
		<Grid centered>
			<Grid.Row>
				<Grid.Column>
					<Banner {...viewData} mobile={mobile} />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column computer="10" width="16" tablet="10">
					{/* intro video */}
					<Embed defaultActive source="youtube" id={viewData.videoID} />
				</Grid.Column>
			</Grid.Row>

			{/* courses, Card Group */}
			{/* register, Sticky */}
		</Grid>
	);
};

// TODO: abstract into utility
const ResponsiveWrapper = Component => props => (
	<>
		<Responsive
			children={<Component {...props} mobile />}
			maxWidth={Responsive.onlyTablet.maxWidth}
		/>
		<Responsive
			children={<Component {...props} />}
			minWidth={Responsive.onlyComputer.minWidth}
		/>
	</>
);

LandingView.defaultProps = defaultProps;

export default ResponsiveWrapper(LandingView);
