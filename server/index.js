var express = require('express');
var cors = require('cors');
var mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

const apiKey = process.env.MAILGUN_API_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || '';
const { ROOT_DOMAIN, PORT } = process.env;

// Predefined 'options' for Mailgun API
let options = {
	apiKey,
	domain,
	retry: 2,
};

app.use('*', cors({ origin: 'https://eli9000.com' }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '..', 'build')));
}

app.use('/messages', bodyParser.json());

app.post('/messages', (req, res, next) => {
	console.log('req.body:', req.body);

	let data = {
		to: req.body.to,
		from: req.body.from,
		subject: req.body.subject,
		text: req.body.text
	}

	mailgun(options).messages().send(data, (err, body) => {
		if (err) {
			res.status(400).send(err);
			console.log('Got error:', err);
		}
		else {
			res.status(200).send(body);
			console.log(body);

			return next();
		}
	});
});

app.get('*', (req, res, next) => {
	// if (process.env.NODE_ENV === 'production'
	// 	&& req.headers['x-forwarded-proto'] !== 'https') {
	// 	return res.redirect(`https://${req.hostname}${req.url}`);
	// }
	res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));
	return next();
});

app.listen(PORT, '192.30.252.153');
