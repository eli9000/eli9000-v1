/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */


// Libs
import React, { Component } from 'react';
import Axios from 'axios';
// import { debounce } from 'lodash';

// CSS


class Giffy extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getGif = this.sendRequest.bind(this);

		this.state = {
			data: {},
			loading: true,
			value: '',
		};
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();

		const endpoint = `http://api.giphy.com/v1/gifs/search?`;
		const search = this.state.value;

		Axios.get(endpoint, {
			params: {
				q: search,
				limit: 1,
				api_key: 'dc6zaTOxFJmzC'
			}
		})
			.then(({ data }) => {
				this.setState({ ...data, loading: false });
				console.log({ ...data });
			})
			.catch((err) => console.warn('ERROR:\n', err));
	}

	render() {
		return (
			<div className="Giffy">
				<h2>Giffy Experiment</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Search: <input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form><br />


				{/*<input type="text" onSubmit={this.getGif} />*/}
				<div className="gif">
					{!this.state.loading && !!this.state.data.length &&
						this.state.data.map(({ id, images }) =>
							<div key={id} id="gifDiv">
								<img src={images.original.url} />
							</div>
						)}
				</div>
			</div>
		);
	}
}

export default Giffy;
