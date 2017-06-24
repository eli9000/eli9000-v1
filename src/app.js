var express = require('express');
var Mailgun = require('mailgun-js');

var app = express();

var api_key = '';
var domain = '';
//Your sending email address
var from_who = 'who.dis@newphone.com';

//Tell express to fetch files from the /js dir
app.use(express.static(__dirname + '/js'));

app.set('view engine', 'jade')

app.get('/', (req, res) => {
	res.render('index', (err, html) => {
		if (err) {
			console.log(err);
		}
		else {
			res.send(html)
		}
	})
})
//POST
app.post('/contact', (req, res) => {
	var api_key = 'key-c3f9c798b3087d00bf5276977c12fa7f';
	var domain = 'sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org';
	var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

	var data = {
		from: 'Mail Gun eli9000 <postmaster@sandbox261c7786ae084710884ccd91b724fbb6.mailgun.org>',
		to: 'eli9000@gmail.com',
		subject: 'Hello',
		text: 'Testing some Mailgun awesomness!'
	};

	mailgun.messages().send(data, function (error, body) {
		console.log(body);
	});
})

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.get('/submit/:mail', (req, res) => {
	//We pass the api_key and domain to the wrapper, or it won't be able to identiry & send email.
	var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

	var data = {
		//Specify email data
		from: from_who,
		//The email to contact
		to: req.params.mail,
		//Subject and text data
		subject: 'Hello from Mailgun',
		html: 'Hello, this is no a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJ5!'
	}
	//Invokes the method to send emails given the above data with the helper library
	mailgun.messages().send(data, (err, body) => {
		//If there is an error, render the error page
		if (err) {
			res.render('error', { error: err });
			console.log("Got an ERROR: ", err);
		}
		//Else we can greet and leave
		else {
			//Here "submitted.jade" is the view file for this landing page
			//We pass the variable "email" from the url parameter in an object rendered by Jade
			res.render('submitted', { email: req.params.mail });
			console.log(body);
		}
	});
});

app.get('/validate/:mail', (req, res) => {
	var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

	var members = [
		{
			address: req.params.mail
		}
	];
	//For the sake of this tutorial you need to create a mailing list on Mailgun.com/cp / lists and put its address below
	mailgun.lists('derekclair@gmail.com').members().add({ members: members, subscribed: true }, (err, body) => {
		console.log(body);
		if (err) {
			res.send("Error - check console");
		}
		else {
			res.send("Added to mailing list");
		}
	});
})

app.get('/incoice/:mail', (req, res) => {


	var path = require("path");
	var fp = path.join(__dirname, 'invoice.txt');
	//Settings
	var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

	var data = {
		from: from_who,
		to: req.params.mail,
		subject: 'An invoice from your friendly hackers',
		text: 'A fake invoice should be attached, it is just an empty text file',
		attachment: fp
	};

	//Sending the email with attachments
	mailgun.messages().send(data, (error, body) => {
		if (error) {
			res.render('error', { error: error });
		}
		else {
			res.send("Attachment is on the way");
			console.log("attachment sent", fp);
		}
	});
})

app.listen(3030);
