/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			from: '',
			subject: '',
			text: '',
		}
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value });;
	}

	handleSubmit(event) {
		event.preventDefault();

		axios({
			method: 'POST',
			url: 'http://localhost:4000/messages',
			data: {
				to: 'eli9000@gmail.com',
				from: this.state.from,
				subject: this.state.subject,
				text: this.state.text,
			},
			headers: {
				'content-type': 'application/json',
			}
		})
			.then((res) => {
				console.log(res)
			})
			.then((err) => { console.log(err) });

		this.setState({
			from: '',
			subject: '',
			text: ''
		});
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
									name="from"
									id="from"
									type="email"
									placeholder="user@example.com"
									value={this.state.from}
									onChange={this.handleChange} />
							</label>
							<br />
							<br />
							<label>
								<h2>Subject:</h2>
								<input
									name="subject"
									id="subject"
									type="text"
									placeholder="Love? Hate? Suggestions?"
									value={this.state.subject}
									onChange={this.handleChange} />
							</label>
							<br />
							<br />
							<label>
								<h2>Lovely message goes here:</h2>
								<textarea
									name="text"
									id="text"
									type="text"
									placeholder="IT'S ALLIIIIIIIVE!!! Feel free to send me a message!"
									value={this.state.text}
									onChange={this.handleChange} />
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
