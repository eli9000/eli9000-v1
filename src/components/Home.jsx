/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//Components
// import Giffy from './Giffy.jsx';

//CSS Styles

//Home Component Code
class Home extends Component {
	constructor() {
		super();

		this.onClick = this.toggleDialog.bind(this);

		this.state = {
			show: false,
		};
	}

	toggleDialog() {
		this.setState(({ show }) => ({ show: !show }));
	}

	render() {
		return (
			<div className="Home">
				<header className="home-header">
					<h1>hey howzit?</h1>
				</header>
				<div className="home-body">
					<div className="home-content">
						<h1>Welcome! Stay a while.</h1>
						<p>
							You're looking at the personal web-site of one Eli Johnson, aka Me.
							Here I will showcase my web-development prowess. Don't judge. Please
							browse around at your leisure. When you've had your fill, press:
							<code> ALT-F4</code> to see some real coding <em>magic</em>!
						</p>
					</div>

					<div className="home-pic">
						<header>A semi professional photo... albeit sideways.</header>
						<img src="/png/meClose.jpg" alt="Solo yo" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
