const {ctrlWrapper} = require("../../decorators");

const signup = require("./signup");
const signin = require("./signin");
const current = require("./current");
const logout = require("./logout");

const user = {
	signup: ctrlWrapper(signup),
	signin: ctrlWrapper(signin),
	current: ctrlWrapper(current),
	logout: ctrlWrapper(logout),
};

module.exports = user;
