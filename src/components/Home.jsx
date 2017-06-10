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
						<h1>hey howzit?</h1>
					</header>
				</div>
				<div className="home-body">
					<div className="home-content">
						<h1>Welcome!</h1>
						<p>
							Hi, I'm Eli.
						</p>
					</div>

					<div className="home-pic">
						<div className="home-pic-actual">
							<img src="/png/matix.png" alt="Solo yo" />
							<div className="topleft">Stuck in the Matrix
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
