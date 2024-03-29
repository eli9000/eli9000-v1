/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/img-has-alt: 0 */

//Libs
import React, { Component } from 'react';

//CSS Styles
import './App.css';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


//App Component Code
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				{this.props.children}
				<footer>
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;
