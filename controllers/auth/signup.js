const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");
const {User} = require("../../models");
const {HttpError, SendEmail} = require("../../utils");

const {BASE_URL} = process.env;

const signup = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email});
	if (user) {
		throw HttpError(409, "Email in use");
	}
	const avatarURL = await gravatar.url(email, {protocol: "http", s: "200"});
	const hashPassword = await bcrypt.hash(password, 10);
	const verificationToken = nanoid();
	const newUser = await User.create({
		...req.body,
		password: hashPassword,
		avatarURL,
		verificationToken,
	});

	const verifyEmail = {
		to: email,
		subject: "Verify mail",
		html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify</a>`,
	};

	await SendEmail(verifyEmail);

	res.status(201).json({
		email: newUser.email,
		subscription: newUser.subscription,
	});
};

module.exports = signup;
