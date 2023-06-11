const updateSubscritionType = async (req, res) => {
	const {subscription} = req.body;

	res.json({
		subscription,
	});
};

module.exports = updateSubscritionType;
