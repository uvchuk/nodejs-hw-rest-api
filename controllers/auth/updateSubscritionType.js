const {User} = require("../../models");

const updateSubscritionType = async (req, res) => {
	const {subscription} = req.body;
	const {_id} = req.user;
	await User.findByIdAndUpdate(_id, {subscription});
	res.json({
		subscription,
	});
};

module.exports = updateSubscritionType;
