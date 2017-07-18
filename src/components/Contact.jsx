/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import Axios from 'axios';

// import '../api/server.js';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sendMail = this.postMail.bind(this);

		this.state = {
			data: {},
			email: 'eli9000@gmail.com',
			subject: 'Test',
			text: 'Test text',
		}
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handleSubjectChange(e) {
		this.setState({ subject: e.target.value });
	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="Contact">
				<div className="contact-head">
					<h1>get at me</h1>
				</div>
				<div className="contact-body">
					{/*<h1>Welcome!</h1>*/}
					<div className="contact-form">
						<form method="POST" onSubmit={this.handleSubmit}>
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
									placeholder="Improvements you could make: Fix your contact form =P"
									value={this.state.subject}
									onChange={this.handleSubjectChange} />
							</label>
							<br />
							<br />
							<label>
								<h2>Nice message:</h2>
								<textarea
									name="text"
									id="text"
									type="text"
									placeholder="**NOTE** this feature is NOT working... Please click on email icon to send message. THANKS!"
									value={this.state.text}
									onChange={this.handleTextChange} />
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

	postMail = () => {

		const endpoint = `https://api.mailgun.net/v3/sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org/log`;

		Axios.get(endpoint, {
			headers: {
				'content-type': 'application/json',
				'authorization': 'Basic YXBpOmtleS1jM2Y5Yzc5OGIzMDg3ZDAwYmY1Mjc2OTc3YzEyZmE3Zg==',
				'access-control-allow-origin': 'http://localhost:3000/contact'
			}
		})
			.then(({ data }) => {
				this.setState({ ...data, loading: false });
				console.log({ ...data });
			})
			.catch((err) => console.warn('ERROR:\n', err));
	}
}



export default Contact;
