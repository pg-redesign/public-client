import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import siteLinks, { linksAsList } from "./site-links";
import LandingView from "./LandingView";
// import CourseView from "./Course";
// import InstructorView from "./Instructor";

const Views = () => (
	<Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
		<Switch>
			<Route exact path="/" component={LandingView} />
			{/* <Route exact path="/courses/:courseName" component={CourseView} />
		<Route exact path="/instructors" component={InstructorView} /> */}
		</Switch>
	</Container>
);

Views.links = {
	...siteLinks,
	navList: linksAsList(siteLinks.nav),
	footerList: linksAsList(siteLinks.footer),
};

export default Views;
