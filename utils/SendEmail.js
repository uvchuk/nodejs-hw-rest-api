const nodemailer = require("nodemailer");

const {GOOGLE_MAIL, GOOGLE_PASS} = process.env;

const nodemailerConfig = {
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {user: GOOGLE_MAIL, pass: GOOGLE_PASS},
};

const transport = nodemailer.createTransport(nodemailerConfig);

const SendEmail = async data => {
	const email = {...data, from: GOOGLE_MAIL};
	await transport.sendMail(email);
	return true;
};

module.exports = SendEmail;
