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
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>

					<div className="projects-pic">
						<header>Stuck in the Matrix</header>
						<div className="projects-pic-actual">
							<img src="/png/htmlcssjs.png" alt="Big 3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
