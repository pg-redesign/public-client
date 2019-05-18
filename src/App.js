import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Views from "./views";
import NavBar from "./components/NavBar";

const App = () => (
	<Router>
		<NavBar links={Views.linkList}>
			<Container>
				<div style={{ minHeight: "200px" }}>test content</div>
				<Views />
			</Container>
		</NavBar>
	</Router>
);

export default App;
