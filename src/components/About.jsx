/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class About extends Component {

	render() {
		return (
			<div className="About">
				<div className="about-head">
					<header className="about-header">
						<h1>about me</h1>
					</header>
				</div>
				<div className="about-body">
					<div className="mySlides">

					</div>
					<div className="about-content">
						<h1>Various Professions:</h1>
						<ul className="professions">
							<li className="locksmith">Locksmith & Access Control
							</li>
							<li className="teacher">Math Teacher
							</li>
							<li className="sales">Sales Dude
							</li>
							<li className="waiter">Waiter => Bartender
							</li>
							<li className="waiter">Technician
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
