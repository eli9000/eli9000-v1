/* eslint jsx-a11y/img-has-alt: 0 */

// Libs
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Routes
import routes from './router.jsx';

// var express = require('express');
// var Mailgun = require('mailgun-js');

// var app = express();

// // var api_key = '';
// // var domain = '';
// // //Your sending email address
// // var from_who = 'who.dis@newphone.com';

// //Tell express to fetch files from the /js dir
// app.use(express.static(__dirname + '/js'));

// app.set('view engine', 'jade')

// app.get('/', (req, res) => {
// 	res.render('index', (err, html) => {
// 		if (err) {
// 			console.log(err);
// 		}
// 		else {
// 			res.send(html)
// 		}
// 	})
// })
// //POST
// app.post('/contact', (req, res) => {
// 	var api_key = 'key-c3f9c798b3087d00bf5276977c12fa7f';
// 	var domain = 'sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org';
// 	var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

// 	var data = {
// 		from: 'Mail Gun eli9000 <postmaster@sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org>',
// 		to: 'eli9000@gmail.com',
// 		subject: 'Hello',
// 		text: 'Testing some Mailgun awesomness!'
// 	};

// 	mailgun.messages().send(data, function (error, body) {
// 		console.log(body);
// 	});
// })

ReactDOM.render(
	routes,
	document.getElementById('root')
);
