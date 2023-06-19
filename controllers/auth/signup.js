const bcrypt = require("bcryptjs");
const {User} = require("../../models");
const {HttpError} = require("../../utils");
const gravatar = require("gravatar");

const signup = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email});
	if (user) {
		throw HttpError(409, "Email in use");
	}
	const avatarURL = await gravatar.url(req.body.email, {protocol: "http", s: "200"});
	const hashPassword = await bcrypt.hash(password, 10);
	const newUser = await User.create({...req.body, password: hashPassword, avatarURL});

	res.status(201).json({
		email: newUser.email,
		subscription: newUser.subscription,
	});
};

module.exports = signup;
