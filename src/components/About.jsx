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
					<div className="about-content">
						<p>
							<h2>Younger years:</h2>
							I was born in Orem, UT. 5th out of eight. Six boys and two girls defines
							the make up of my super rad fam. At age 7, my Dad and Mom moved us all to
							Alaska. Spent 10 glorious years playing in the woods hunting, fishing and
							camping.
						</p>
						<p>
							<h2>College years:</h2>
							<em>"I spent most of my time occupying various administration buildings...
								smoking a lot of thai stick... breaking into the ROTC... and bowling.
								To tell you the truth Brandt, I don't remember most of it." -The Dude.
							</em>
							<br />
							Ok, best movie EVER! Anyways, I graduated in the spring of 2009 from the
							University of Utah with a Bachelor of Science degree in Mathematics with
							a teaching emphasis.
						</p>
						<p>
							<h2>Professional career:</h2>
							My teaching career began at Broadview University where I was hired soon
							after graduating. I stayed for 3 years before leaving to teach at a
							public high school. It didn't take long before the dismal pay, ungodly
							workload, and spoiled kids had me jaded and regretting my career choice.
							I recently decided to cut my losses and persue a different career path.
							I'm dead set on breaking in to the web-dev world. Can't stop. Won't stop.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
