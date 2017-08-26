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
			from: 'testy_mctest@tester.com',
			subject: 'Just testing meow',
			text: 'Production server is not being nice...',
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
			method: 'post',
			url: '/messages',
			responseType: 'json',
			data: {
				to: 'eli9000@icloud.com',
				from: this.state.from,
				subject: this.state.subject,
				text: this.state.text,
			},
			headers: {
				'content-type': 'application/json',
			}
		})
			.then((res) => {
				console.log(res);
			})
			.then((err) => { console.log(err) });

		// this.setState({
		// 	from: '',
		// 	subject: '',
		// 	text: ''
		// });
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
						<form onSubmit={this.handleSubmit}>
							<label>
								<h2>Your eMail:</h2>
								<input
									name="from"
									id="from"
									type="email"
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
