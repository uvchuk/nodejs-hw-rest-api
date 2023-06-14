const {ctrlWrapper} = require("../../decorators");

const signup = require("./signup");
const signin = require("./signin");
const current = require("./current");
const logout = require("./logout");
const updateSubscritionType = require("./updateSubscritionType");
const updateAvatar = require("./updateAvatar");

const user = {
	signup: ctrlWrapper(signup),
	signin: ctrlWrapper(signin),
	current: ctrlWrapper(current),
	logout: ctrlWrapper(logout),
	updateSubscritionType: ctrlWrapper(updateSubscritionType),
	updateAvatar: ctrlWrapper(updateAvatar),
};

module.exports = user;
