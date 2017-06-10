/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			email: '',
			subject: '',
			content: '',
		}

	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handleSubjectChange(e) {
		this.setState({ subject: e.target.value });
	}

	handleContentChange(e) {
		this.setState({ content: e.target.value });
	}

	handleSubmit(e) {
		console.log(this.state.email);
		console.log(this.state.subject);
		console.log(this.state.content);
		this.setState({
			email: '',
			subject: '',
			content: '',
		});
		e.preventDefault();

	}

	render() {
		return (
			<div className="Contact">
				<div className="contact-head">
					<header className="contact-header">
						<h1>holla at ya boy</h1>
					</header>
				</div>
				<div className="contact-body">
					{/*<h1>Welcome!</h1>*/}
					<div className="contact-form">
						<form onSubmit={this.handleSubmit}>
							<label>
								<h2>Your eMail:</h2>
								<input
									name="email"
									id="email"
									type="email"
									placeholder="user@example.com"
									value={this.state.email}
									onChange={this.handleEmailChange} />
							</label>
							<br />
							<br />
							<label>
								<h2>Subject:</h2>
								<input
									name="subject"
									id="subject"
									type="text"
									placeholder="Improvements you could make:"
									value={this.state.subject}
									onChange={this.handleSubjectChange} />
							</label>
							<br />
							<br />
							<label>
								<h2>Nice message:</h2>
								<textarea
									name="content"
									id="content"
									type="text"
									placeholder="Perhaps you could make your components a bit more modular..."
									value={this.state.content}
									onChange={this.handleContentChange} />
							</label>
							<br />
							<br />
							<input type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
