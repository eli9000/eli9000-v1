/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class About extends Component {

	render() {
		return (
			<div className="About">
				<div className="about-head">
					<header className="about-header">
						<h1>about meh</h1>
					</header>
				</div>
				<div className="about-body">
					<div className="mySlides">

					</div>
					<div className="about-content">
						<h1>Various Professions:</h1>
						<ul className="professions">
							<li className="locksmith">Locksmith & Access Control
								<span className="locksmith-text">
									Breaking into stuff, Mechanical inclination, Access Control guru, Low voltage wiring skills
								</span>
							</li>
							<li className="teacher">Math Teacher
								<span className="teacher-text">Worst job EVER!</span>
							</li>
							<li className="sales">Sales Dude
								<span className="sales-text">Over the phone, d2d, used cars</span>
							</li>
							<li className="waiter">Waiter => Bartender
								<span className="waiter-text">I gotcha drunk!</span>
							</li>
							<li className="waiter">Technician
								<span className="waiter-text">150+ alarm installs</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
