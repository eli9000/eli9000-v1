/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class Contact extends Component {

	render() {
		return (
			<div className="Contact">
				<div className="contact-head">
					<header className="contact-header">
						<h1>holla at a playa</h1>
					</header>
				</div>
				<div className="contact-body">
					<div className="contact-content">
						<h1>Welcome!</h1>
						<p>

						</p>
					</div>

					<div className="contact-pic">
						<header>Stuck in the Matrix</header>
						<div className="contact-pic-actual">
							<img src="/png/htmlcssjs.png" alt="Big 3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
