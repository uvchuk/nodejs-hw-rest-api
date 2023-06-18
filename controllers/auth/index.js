const {ctrlWrapper} = require("../../decorators");

const signup = require("./signup");
const signin = require("./signin");
const current = require("./current");
const logout = require("./logout");
const updateSubscritionType = require("./updateSubscritionType");
const updateUserAvatar = require("./updateUserAvatar");

const auth = {
	signup: ctrlWrapper(signup),
	signin: ctrlWrapper(signin),
	current: ctrlWrapper(current),
	logout: ctrlWrapper(logout),
	updateSubscritionType: ctrlWrapper(updateSubscritionType),
	updateUserAvatar: ctrlWrapper(updateUserAvatar),
};

module.exports = auth;
