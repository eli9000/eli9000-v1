/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


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
									<NavLink exact to="/" activeClassName="active" onClick={this.dropdown}>Home</NavLink>
								</li>
								<li>
									<NavLink to="/about" activeClassName="active" onClick={this.dropdown}>About</NavLink>
								</li>
								<li>
									<NavLink to="/projects" activeClassName="active" onClick={this.dropdown}>Projects</NavLink>
								</li>
								<li>
									<NavLink to="/contact" activeClassName="active" onClick={this.dropdown}>Contact</NavLink>
								</li>
							</ul>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default Header;
