import React, { Component } from 'react';

class About extends Component {

	render() {
		return (
			<div className="About">
				<div className="about-head">
					<header className="about-header">
						<h1>what's this all aboot?</h1>
					</header>
				</div>
				<div className="about-body">
					<div className="about-content">
						<h1>Welcome!</h1>
						<p>

						</p>
					</div>

					<div className="about-pic">
						<header>Stuck in the Matrix</header>
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
