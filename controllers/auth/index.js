const {ctrlWrapper} = require("../../decorators");

const signup = require("./signup");
const signin = require("./signin");

const user = {
	signup: ctrlWrapper(signup),
	signin: ctrlWrapper(signin),
};

module.exports = user;
