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
					<div className="about-content">
						<h1>Professions:</h1>
						<ul className="professions">
							<li className="locksmith">Locksmith
								<span className="locksmith-text">Breaking into stuff</span>
							</li>
							<li className="teacher">Math teacher
								<span className="teacher-text">Worst job EVER!</span>
							</li>
							<li className="sales">Sales person
								<span className="sales-text">Over the phone, d2d, used cars</span>
							</li>
							<li className="waiter">Waiter => Bartender
								<span className="waiter-text">I gotcha drunk!</span>
							</li>
						</ul>
					</div>

					<div className="about-pic">
						<header>The big 3</header>
						<div className="about-pic-actual">
							<img src="/png/htmlcssjs.png" alt="Big 3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
