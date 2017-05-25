/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="copyright">
					<div className="text">
						<h4>eli9000.com</h4>
						<code>&copy; Copyright 2017, and some shit.</code>
					</div>
				</div>
				<div className="links">

					<ul>
						<li><a href="gh">
							<img src="/png/git.png" alt="GitHub" />
						</a></li>
						<li><a href="in">
							<img src="/png/in.png" alt="LinkedIn" />
						</a></li>
						<li><a href="fb">
							<img src="/png/facebook.png" alt="Facebook" />
						</a></li>
						<li><a href="tw">
							<img src="/png/twitter.png" alt="Twitter" />
						</a></li>
						<li><a href="mail">
							<img src="/png/mail.png" alt="Mail" />
						</a></li>
					</ul>
				</div>
			</div >
		)
	}
}
