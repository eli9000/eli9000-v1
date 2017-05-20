/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="links">
					<ul>
						<li>FB</li>
						<li>Tw</li>
						<li>Git</li>
						<li>LI</li>
						<li>IG</li>
					</ul>
				</div>
			</div >
		)
	}
}
