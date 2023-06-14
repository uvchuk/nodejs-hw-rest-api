const {User} = require("../../models");

const updateAvatar = async (req, res) => {
	const {avatarURL} = req.body;
	const {_id} = req.user;
	await User.findByIdAndUpdate(_id, {avatarURL});
	res.json({
		avatarURL,
	});
};

module.exports = updateAvatar;
