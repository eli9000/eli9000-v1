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
				<div className="home-head">
					<header className="home-header">
						<h1>hey howzit?
						{/*<img src="/png/shaka-sign.png" alt="Shaka brah" />*/}
						</h1>
					</header>
				</div>
				<div className="home-body">
					<div className="home-content">
						<h1>Welcome!</h1>
						<p>
							You're looking at the personal web-site of one Eli Johnson, aka Me.
							Here I will showcase my web-development prowess. Don't judge. Please
							browse around at your leisure. When you've had your fill, press:
							<code> ALT-F4</code> to see some real coding <em>magic</em>!
						</p>
					</div>

					<div className="home-pic">
						<header>Stuck in the Matrix</header>
						<div className="home-pic-actual">
							<img src="/png/matix.png" alt="Solo yo" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
