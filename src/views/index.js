import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import LandingView from "./LandingView";
import RegistrationView from "./RegistrationView";
import siteLinks, { linksAsList } from "./site-links";

const Views = () => (
	<Container style={{ paddingTop: "20px", paddingBottom: "100px" }}>
		<Switch>
			<Route exact path="/" component={LandingView} />
      <Route path="/register/:courseID?" component={RegistrationView} />
		</Switch>
	</Container>
);

Views.links = {
	...siteLinks,
	navList: linksAsList(siteLinks.nav),
	footerList: linksAsList(siteLinks.footer),
};

export default Views;
