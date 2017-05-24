/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import Axios from 'axios';

export default class Starwars extends Component {
	constructor() {
		super();

		this.getFact = this.sendRequest.bind(this);

		this.state = {
			data: {},
			loading: true,
			show: false,
		};
	}


	render() {

		// const bigData = this.state.results;

		return (
			<div className="Starwars">
				<div className="button">
					{!this.state.show &&
						<button onClick={this.getFact}>
							Click for random Starwars Char!
					</button>
					}

					{this.state.show &&
						<button onClick={this.getFact}>
							Close Me!
					</button>
					}
				</div>

				{/*{!this.state.loading && !!this.state.results.length &&
						this.state.results.map(())}*/}
				{!this.state.loading && this.state.show &&
					<ul>
						<li><strong>Name: </strong> {this.state.data}</li><br />
						<li><strong>Birth Year: </strong> {this.state.birth_year}</li><br />
						<li><strong>Gender: </strong> {this.state.gender}</li>
					</ul>
				}

			</div>
		);
	}

	sendRequest(e) {
		this.setState(({ show }) => ({ show: !show }));

		if (!this.state.show) {
			const randNum = Math.floor(Math.random() * 88) + 1;
			console.log(randNum);
			const endpoint = 'http://swapi.co/api/people/' + randNum;
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

				.then(({ data: { name, birth_year, gender } }) => {
					this.setState({
						data: name, birth_year, gender,
						loading: false,
					});
					console.log({ data: name, birth_year, gender });
				})

				.catch((err) => console.log('ERROR:\n', err));
		}
	}
}




