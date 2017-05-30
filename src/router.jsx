/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

// Import Components
import App from './App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// Define const routes
const routes = (
	<Router>
		<App>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</App>
	</Router>
);

export default routes;
