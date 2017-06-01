/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			value: '',
		}

	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		console.log(this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<div className="Contact">
				<div className="contact-head">
					<header className="contact-header">
						<h1>holla at a playa</h1>
					</header>
				</div>
				<div className="contact-body">
					<div className="contact-content">
						<h1>Welcome!</h1>
						<div className="contact-form">
							<form>
								<label>
									Your eMail:
									<input
										name="userEmail"
										type="text"
										onChange={this.handleChange} />
								</label>
								<br />
								<label>
									Be nice:
									<input
										name="emailContent"
										type="text"
										onChange={this.handleChange} />
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
