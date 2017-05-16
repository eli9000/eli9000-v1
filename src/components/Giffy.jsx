/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

import React, { Component } from 'react';
import Axios from 'axios';
// import { debounce } from 'lodash';

// CSS


class Giffy extends Component {
	constructor() {
		super();

		this.getGif = this.sendRequest.bind(this);
		// this.getGif = debounce(this.sendRequest, 1000, {
		// 	leading: true,
		// 	trailing: true,
		// });

		this.state = {
			data: [],
			loading: true,
		};
	}

	// componentDidMount() {
	// 	const endpoint = `http://api.giphy.com/v1/gifs/search?`;

	// 	Axios.get(endpoint, {
	// 		params: {
	// 			q: 'rick and morty',
	// 			limit: 2,
	// 			api_key: 'dc6zaTOxFJmzC'
	// 		}
	// 	})
	// 		.then(({ data }) => {
	// 			console.log('fetch() => {data}\n', data);
	// 			this.setState({ ...data, loading: false });
	// 		});
	// }

	render() {
		return (
			<div className="Giffy">
				<h2>Giffy Experiment</h2>
				<input type="text" onChange={this.getGif} />
				<div className="gif">
					{!this.state.loading && !!this.state.data.length &&
						this.state.data.map(({ id, images }) =>
							<div key={id}>
								<img src={images.original.url} />
							</div>
						)}
				</div>
			</div>
		);
	}

	sendRequest(e) {

		const endpoint = `http://api.giphy.com/v1/gifs/search?`;

		Axios.get(endpoint, {
			params: {
				q: e.target.value,
				limit: 5,
				api_key: 'dc6zaTOxFJmzC'
			}
		})
			.then(({ data }) => {
				this.setState({ ...data, loading: false });
			})
			.catch((err) => console.warn('ERROR:\n', err));
	}
}

export default Giffy;
