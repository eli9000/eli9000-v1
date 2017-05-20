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
				<h1>Welcome Visitor!</h1>

				{!this.state.show &&
					<div className="initButton">
						<a onMouseOver={this.onClick}>
							<button>Click to Begin</button>
						</a>
					</div>
				}

				{this.state.show &&
					<div className="dialog">
						<a onMouseOver={this.onClick}>
							<button>Haha Missed Me!</button>
						</a>
					</div>
				}

			</div>
		);
	}
}

export default Home;
