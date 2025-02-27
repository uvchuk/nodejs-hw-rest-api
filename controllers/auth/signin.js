const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../../models");
const {HttpError} = require("../../utils");

const {SECRET_KEY} = process.env;

const signin = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({email});
	if (!user) {
		throw HttpError(401, "Email or password is wrong");
	}
	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) {
		throw HttpError(401, "Email or password is wrong");
	}

	const {_id: id} = user;

	const payload = {
		id,
	};

	const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
	await User.findByIdAndUpdate(id, {token});

	res.json({
		token,
	});
};

module.exports = signin;
