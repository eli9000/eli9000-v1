import Mailgun from 'mailgun-js';
import express from 'express';
// import rp from 'request-promise';

const mg = Mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_API_KEY || '',
	public_key: process.env.MAILGUN_PUBLIC_API_KEY || ''
});


const app = express();

const PORT = 4000;
const URL = 'https://api.mailgun.net/v3';
const domain = '/sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org';
const API = '/messages';


app.listen(PORT, () => console.log(
	`Server running on Port: ${PORT}`
));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

function sendMailgunEmail(message) {

	rp.post(`${URL}${domain}${API}`, {
		to: 'Eli Johnson<postmaster@sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org>',
		from: message.from,
		subject: message.subject,
		text: message.content,
	})
		.then((res) => {
			console.log('.then() => res:', res);
			return res;
		})
		.catch(err => console.log('ERROR:', err.message || err));
}

sendMailgunEmail({
	from: 'eli9000@gmail.com',
	subject: 'Server Test',
	content: 'Server Test Content',
});

app.use('/email-eli', (req, res, next) => {
	const message = res.json();

	console.log('/email-eli => message:', message);
	sendMailgunEmail();

	next();

})

console.log('Server is Running!! On Port: ' + PORT)


