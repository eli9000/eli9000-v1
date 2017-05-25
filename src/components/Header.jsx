/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//CSS Styles

//Home Component Code
class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="logo">
					<h1>
						<code>
							eli9000.com
					</code>
					</h1>
				</div>
				<div className="menu">
					<ul>
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#projects">PROJECTS</a>
						</li>
						<li>
							<a href="#contact">CONTACT</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
