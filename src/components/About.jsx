/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class About extends Component {

	render() {
		return (
			<div className="About">
				<div className="about-head">
					<h1>about me</h1>
				</div>
				<div className="about-body">
					<div className="about-content">
						<p>
							<em>This is a filler page that will soon be replace with a query form letting
								you search a database with information about yours truely. In the mean time,
								you're stuck with this...
							</em>
						</p>
						<p>
							<h2>Younger years:</h2>
							I was born in Orem, UT. 5th out of eight. Six boys and two girls. At age 7,
							my Dad and Mom moved us all to Alaska. Spent 10 glorious years playing in
							the woods hunting, fishing and camping. Moved back to Utah my senior year,
							and was part of the first graduating class of Riverton High School circa 2000.
						</p>
						<p>
							<h2>College years:</h2>
							I graduated in the spring of 2009 from the University of Utah with a
							Bachelor of Science degree in Mathematics with a Teaching emphasis.
						</p>
						<p>
							<h2>Professional career:</h2>
							I taught math for about 5 years and learned many things, most notably was that I
							needed a new career. Now I'm committed to the code. I will keep learning
							and improving every day. It's a new and exciting time in the coding world
							and I'm stoked to be apart of it in whatever small way.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
