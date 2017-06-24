/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class Projects extends Component {

	render() {
		return (
			<div className="Projects">
				<div className="projects-head">
					<h1>in the works</h1>
				</div>
				<div className="projects-body">
					<div className="projects-content">
						<h2>Mike Johnson Project</h2>
						<p>
							This will be simple Meteor app that will connect with current and past students of Mr. J, my Dad.
							Having taught for over 30 years, this idea came to me when pondering the crazy number of students
							my Dad has taught over the years. Users will login with Facebook and from that data we will make
							lots of fun conjectures. This is purely a social experiment, and a way to play with some data.
							&nbsp;<a href="https://github.com/eli9000/MJP">GitHub repository</a>.
						</p>
						<h2>Referee App</h2>
						<p>
							This app, being designed with React, will attempt to solve a problem I encountered when reffing
							youth football. A clock/score management system that is synced between all refs. I'm sure there is
							probably one out there already that works just fine but I don't care. Check back soon for Git link!
						</p>
						<h2>Bluffdale HAM</h2>
						<p>
							This project is the brain child of my friend and coding mentor, @derekclair. It's main purpose is to
							act as an isolated local network platform and communication tool. In conjunction HAM radios, this app
							is intended for use in times of extreme emergency when the internet and other forms of communication
							are disabled.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
