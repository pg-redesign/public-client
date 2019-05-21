import React from "react";
import {
	Grid,
	Icon,
	Card,
	Embed,
	Header,
	Container,
	Responsive,
} from "semantic-ui-react";

import Logo from "../components/Logo";

// fallback data
const defaultProps = {
	data: {
		viewData: {
			videoID: "Ztk3Q9sTy84",
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
	bannerPhrase:
		"Teaching the World Groundwater Hydrology, Pollution, & Remediation since 1976",
	// version 2
	// "World-renowned Hydrology, Pollution, & Remediation courses",
};

const valuePropCardData = mobile => {
	const iconProps = {
		size: "big",
		style: { color: "var(--primary)" },
	};

	return [
		{
			// "trophy"
			headerIcon: <Icon className="fas fa-trophy" {...iconProps} />,
			description:
				"Taught by award-winning, globally recognized groundwater experts",
		},
		{
			// "microscope" "user-graduate"
			// does not work with <Icon> component, fa-2x == "big"
			headerIcon: <i className="fas fa-microscope fa-2x" {...iconProps} />,
			description:
				"Designed for  Geologists, Engineers, Chemists and Environmental Scientists",
		},
		{
			// "hard-hat" "clipboard-check"
			headerIcon: <Icon className="fas fa-clipboard-check" {...iconProps} />,
			description:
				"Academic & practical principles, technologies, and best practices",
			// version 2 (takes up 3-4 lines, not consistent with other value props)
			// "Comprehensive & practical knowledge of groundwater principles, technologies, and best practices",
		},
		{
			// "university" "graduation-cap"
			headerIcon: <Icon className="fas fa-graduation-cap" {...iconProps} />,
			description: "Board approved for Continuing Education Credits (CEU)",
		},
	];
};

const ValuePropCard = props => {
	const { headerIcon, description } = props;

	return (
		<Card raised color="grey">
			<Card.Content>
				<Card.Header textAlign="center" content={headerIcon} />
				<Card.Description textAlign="center" content={description} />
			</Card.Content>
		</Card>
	);
};

const ValuePropositions = props => {
	const cards = valuePropCardData().map(cardData => (
		<ValuePropCard {...cardData} />
	));

	return <Card.Group centered stackable itemsPerRow="2" content={cards} />;
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
				<Grid.Column computer="10" tablet="10" mobile="16">
					{/* intro video */}
					<Embed defaultActive source="youtube" id={viewData.videoID} />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column computer="16" tablet="16" mobile="14">
					<ValuePropositions />
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
