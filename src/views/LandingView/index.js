import React from "react";
import { Grid, Embed, Header, Divider } from "semantic-ui-react";

import Banner from "./Banner";
import UpcomingCourses from "./UpcomingCourses";
import ValuePropositions from "./ValuePropositions";
import responsiveWrapper from "../../utils/responsive-wrapper";

// fallback data
const defaultProps = {
	data: {
		viewData: {
			videoID: "Ztk3Q9sTy84",
		},
	},
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

			<Grid.Row>
				<Header as="h1" content="Upcoming Courses" inverted />
			</Grid.Row>

			<Grid.Row>
				<Grid.Column computer="12" tablet="16" mobile="15">
					<UpcomingCourses {...viewData} />
				</Grid.Column>
			</Grid.Row>
			{/* student count / student company logos */}
			{/* register, Sticky */}
		</Grid>
	);
};

LandingView.defaultProps = defaultProps;

// TODO: export in RequestWrapper, how does this work with responsiveWrapper? ...too much wrapping
export default responsiveWrapper(LandingView);
