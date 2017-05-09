/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//CSS Styles

//Home Component Code
class Home extends Component {
	constructor() {
		super();

		this.onClick = this._toggleDialog.bind(this);

		this.state = { show: false };
	}

	_toggleDialog() {
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
				<h1>Welcome poor fool!</h1>
				<div>
					<a onClick={this.onClick}>
						<button>Click to Begin</button>
					</a>
				</div>
				{this.state.show &&
					<div className="dialog">
						<h1>My Dialog</h1>
					</div>
				}
			</div>
		);
	}
}

export default Home;
