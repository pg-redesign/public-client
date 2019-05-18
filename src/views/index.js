import React from "react";
import { Switch, Route } from "react-router-dom";

// import HomeView from "./Home";
// import CourseView from "./Course";
// import InstructorView from "./Instructor";

const Views = () => (
	<Switch>
		{/* <Route exact path="/" component={HomeView} />
		<Route exact path="/courses/:courseName" component={CourseView} />
		<Route exact path="/instructors" component={InstructorView} /> */}
	</Switch>
);

Views.links = {
	test: "path here",
	another: "path another",
	third: "path here",
	fourth: "path another",
};

Views.linkList = Object.entries(Views.links).map(([name, path]) => ({
	name,
	path,
}));

export default Views;
