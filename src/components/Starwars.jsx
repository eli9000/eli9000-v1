/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import Axios from 'axios';

export default class Starwars extends Component {
	constructor() {
		super();

		this.getFact = this.sendRequest.bind(this);

		this.state = {
			data: [],
			loading: false,
		};
	}


	render() {

		// const bigData = this.state.results;

		return (
			<div className="Starwars">
				<button onClick={this.getFact}>
					Click Me
				</button>
				<ul>
					{/*{!this.state.loading && !!this.state.results.length &&
						this.state.results.map(())}*/}
					{!this.state.loading && !!this.state.data.length && this.state.data.map(({ name }) =>
						<li key={name}>{name}</li>
					)}
				</ul>

			</div>
		);
	}

	sendRequest(e) {

		const endpoint = 'http://swapi.co/api/people/';

		Axios.get(endpoint)
			// .then(({ data }) => {
			// 	this.setState({ data, loading: false });
			// 	console.log({ data });
			// })

			// .then((res) => {
			// 	this.setState({ data: res.data.results, loading: false });
			// 	console.log({ data: res.data.results });
			// })

			// .then(({ data }) => {
			// 	this.setState({ data: data.results, loading: false });
			// 	console.log({ data: data.results });
			// })

			.then(({ data: { results } }) => {
				this.setState({ data: results, loading: false });
				console.log({ data: results });
			})

			.catch((err) => console.log('ERROR:\n', err));
	}
}




