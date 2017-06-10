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
							Hi, I'm Eli. Thanks for checking out my personal website. Built from scratch using React JS,
							Sassy CSS, Flexbox, and Node.js obviously. Now if we were still in the good ol' days of
							GeoCities and Anglefire (mid 90's), I'd have my ubiquitous "Under Construction" gif prominently displayed.
							Let's not forget the animated horizontal line. You could NEVER have too many of those.
						</p>
						<p>
							While this is far from a finished product, I'd still love to hear any suggestions, criticisms,
							or compliments you might have. Just navigate to the 'Contact' page or
							click the 'email' icon at the bottom right of the page!
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
