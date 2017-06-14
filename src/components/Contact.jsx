/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import Axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sendMail = this.sendMail.bind(this);

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
		// console.log(this.state.email);
		// console.log(this.state.subject);
		// console.log(this.state.content);

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
							<input type="submit" value="Submit" onClick={this.sendMail} />
						</form>
					</div>
				</div>
			</div>
		);
	}

	sendMail(e) {
		const server = '/';
		const email = this.state.email;
		const subject = this.state.subject;
		const content = this.state.content;

		Axios.post(server, {
			from: email,
			subject: subject,
			content: content,
		})
			.then(function (responce) {
				console.log(responce);
			})
			.then(function (error) {
				console.log(error);
			})
	}

	// sendMail(e) {

	// 	// const endpoint = 'https://api.mailgun.net/v3/mail.eli9000.com';
	// 	const domain = 'mail.eli9000.com';
	// 	const api_key = 'key-c3f9c798b3087d00bf5276977c12fa7f';
	// 	const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

	// 	var data = {
	// 		from: this.state.email,
	// 		// to: 'postmaster@mail.eli9000.com',
	// 		subject: this.state.subject,
	// 		text: this.state.content,
	// 	};

	// 	mailgun.messages().send(data, function (error, body) {
	// 		console.log(body);
	// 	});
	// }
}

export default Contact;
