var express = require('express');
var cors = require('cors');
var mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
var app = express();

const apiKey = process.env.MAILGUN_API_KEY || '';
const domain = process.env.MAILGUN_DOMAIN || '';

// Predefined 'options' for Mailgun API
let options = {
	apiKey,
	domain,
	retry: 2,
	auth: {
		username: 'api',
		password: 'apiKey'
	}
};

app.use('*', cors({ origin: 'http://localhost:3000' }));
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

app.listen(4000, () => console.log('SERVER: is running!!'));
