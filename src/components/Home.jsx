/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//Home Component Code
class Home extends Component {

	render() {
		return (
			<div className="Home">
				<div className="home-head">
					<h1>hey howzit?</h1>
				</div>

				<div className="home-body">
					<div className="home-content">

						<h1>Welcome!</h1>
						<p>
							Thanks for checking out my website. Built from scratch using React JS,
							Sassy CSS, Flexbox, and NPM.
						</p>
						<img src="/gifs/uc-rotate.gif" alt="Under contruction gif" />
						<p>
							Had to include the ubiquitous 'Under Construction' gif, strictly for nostalgic
							purposes. Reminds me of the good ol' Geocities days.
						</p>
						<p>
							This project is FAR from finished! However, I'd love to hear any suggestions,
							and/or comments you might have. Just navigate to the 'Contact' page or
							click the 'email' icon at the bottom right of the page!
						</p>
					</div>

					<div className="home-pic">
						<img src="/png/matix.png" alt="Solo yo" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
