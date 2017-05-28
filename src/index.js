/* eslint jsx-a11y/img-has-alt: 0 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );

// Libs
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Routes
import routes from './router.jsx';

ReactDOM.render(
	routes,
	document.getElementById('root')
);
