var nodemailer = require ('nodemailer');

// create the connection with mail server
var transporter = nodemailer.createTransport({
	service : 'gamil',
	host: 'smtp.gmail.com',
	auth: {
		user: 'shilpi.mail1988@gmail.com',
		pass: 'Itsmylife14'
	}
});

//mail description
var mailOptions = {
	from: 'shilpi.mail1988@gmail.com',
	to: 'shilpi.mail1988@gmail.com',
	subject: 'This is a test mail',
	text: 'Mail sent using node js. Thank you!'
};

//mail sending
transporter.sendMail( mailOptions, function(err, info)
{
	if (err)
	{
		console.log(err);
	}
	else
	{
		console.log('Email sent:' + info.response);
	}
});	