import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./variables.css";
import "./global.css";
import Views from "./views";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => (
	<Router>
		<NavBar links={Views.links.navList}>
			<Views />
		</NavBar>
		<Footer links={Views.links.footerList} />
	</Router>
);

export default App;
