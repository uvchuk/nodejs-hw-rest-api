const {Contact} = require("../../models");

const getAllContacts = async (req, res) => {
	const {_id: owner} = req.user;
	const {page = 1, limit = 10, ...query} = req.query;
	const skip = (page - 1) * limit;
	const result = await Contact.find({owner, ...query}, "-createdAt -updatedAt", {
		skip,
		limit,
	}).populate("owner", "email name");

	// const total = await Contact.where({owner, ...query}).countDocuments();

	res.json(result);
};

module.exports = getAllContacts;
