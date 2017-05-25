/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//CSS Styles

//Home Component Code
class Header extends Component {
	constructor() {
		super();

		this.dropdown = this.showMenu.bind(this);

		this.state = {
			show: false,
		};
	}

	showMenu() {
		this.setState(({ show }) => ({ show: !show }));
	}

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
					<div className="menu-icon" onClick={this.dropdown}>
						<button className="menu-button">
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</button>
					</div>

					{this.state.show &&
						<div className="menu-dropdown">
							<ul>
								<li>
									<a href="#about" onClick={this.dropdown}>ABOUT</a>
								</li>
								<li>
									<a href="#projects" onClick={this.dropdown}>PROJECTS</a>
								</li>
								<li>
									<a href="#contact" onClick={this.dropdown}>CONTACT</a>
								</li>
							</ul>
						</div>
					}


					{/*<ul>
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#projects">PROJECTS</a>
						</li>
						<li>
							<a href="#contact">CONTACT</a>
						</li>
					</ul>*/}
				</div>
			</div>
		);
	}
}

export default Header;
