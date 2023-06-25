const {ctrlWrapper} = require("../../decorators");

const signup = require("./signup");
const verifyEmail = require("./verifyEmail");
const resendCode = require("./resendCode");
const signin = require("./signin");
const current = require("./current");
const logout = require("./logout");
const updateSubscritionType = require("./updateSubscritionType");
const updateUserAvatar = require("./updateUserAvatar");

const auth = {
	signup: ctrlWrapper(signup),
	verifyEmail: ctrlWrapper(verifyEmail),
	resendCode: ctrlWrapper(resendCode),
	signin: ctrlWrapper(signin),
	current: ctrlWrapper(current),
	logout: ctrlWrapper(logout),
	updateSubscritionType: ctrlWrapper(updateSubscritionType),
	updateUserAvatar: ctrlWrapper(updateUserAvatar),
};

module.exports = auth;
