/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//CSS Styles

//Home Component Code
class Home extends Component {
	constructor() {
		super();

		this.onClick = this.toggleDialog.bind(this);

		this.state = { show: false };
	}

	toggleDialog() {
		// Old Way
		// this.setState({ show: !this.state.show });


		// Old Way: Expanded
		// const newState = { show: !this.state.show };

		// this.setState((currentState) => {
		// 	return {
		// 		...currentState,
		// 		...newState,
		// 	};
		// });

		// New Prefered Way
		this.setState(({ show }) => ({ show: !show }));
	}

	render() {
		return (
			<div className="Home">
				<h1>Welcome Internet Traveler!</h1>

				{!this.state.show &&
					<div className="initButton">
						<a onClick={this.onClick}>
							<button>Click to Begin</button>
						</a>
					</div>
				}

				{this.state.show &&
					<div className="dialog">
						<a onClick={this.onClick}>
							<button>Haha Missed Me!</button>
						</a>
					</div>
				}

			</div>
		);
	}
}

export default Home;
