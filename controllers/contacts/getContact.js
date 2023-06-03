const {Contact} = require("../../models");
const {HttpError} = require("../../utils");

const getContact = async (req, res) => {
	const {contactId} = req.params;

	const result = await Contact.findById(contactId);
	if (!result) throw HttpError(404);

	res.json(result);
};

module.exports = getContact;
