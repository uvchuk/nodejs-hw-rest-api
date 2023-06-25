const {User} = require("../../models");
const {HttpError, SendEmail} = require("../../utils");

const {BASE_URL} = process.env;

const resendCode = async (req, res) => {
	const {email} = req.body;
	const user = await User.findOne({email});
	if (!user) throw HttpError(404, "User not found");
	if (user.verify) throw HttpError(400, "Verification has already been passed");

	const verifyEmail = {
		to: email,
		subject: "Verify mail",
		html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify</a>`,
	};

	await SendEmail(verifyEmail);
	res.json({message: "Verification email sent succesfully"});
};

module.exports = resendCode;
