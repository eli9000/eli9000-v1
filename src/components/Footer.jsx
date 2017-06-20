/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

export default class Footer extends Component {
	constructor() {
		super();

		this.tooltip = this.toggleTip.bind(this);

		this.state = {
			show: false,
		}
	}

	toggleTip() {
		this.setState(({ show }) => ({ show: !show }));
	}

	render() {
		return (
			<div className="Footer">
				{/*<div className="copyright">
					<h2>eli9000.com</h2>
					<p>
						&copy; 2017 (insert cool company name here). All rights reserved.
					</p>
				</div>*/}
				<div className="links">
					<ul>
						<li><a href="https://github.com/eli9000">
							<img src="/png/git.png" alt="GitHub" />
						</a></li>
						<li><a href="https://www.linkedin.com/in/eli9000/">
							<img src="/png/linkedin.png" alt="LinkedIn" />
						</a></li>
						<li><a href="https://twitter.com/_eli9000">
							<img src="/png/twitter.png" alt="Twitter" />
						</a></li>
						<li><a href="mailto:eli9000@gmail.com?Subject=Hello%20Eli,%20love%20the%20site!">
							<img src="/png/mail.png" alt="Mail" />
						</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
