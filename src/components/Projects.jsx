/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class Projects extends Component {

	render() {
		return (
			<div className="Projects">
				<div className="projects-head">
					<header className="projects-header">
						<h1>ish be workin on</h1>
					</header>
				</div>
				<div className="projects-body">
					<div className="projects-content">
						<h1>Welcome!</h1>
						<ul>
							<li>The Mike Johnson Project</li>
							<li>Referee App</li>
							<li>Flexbox Fun</li>
							<li>Bluffdale HAM Radio</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
