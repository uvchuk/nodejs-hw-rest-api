const {Contact} = require("../../models");
const {HttpError} = require("../../utils");

const updateContact = async (req, res) => {
	const {contactId} = req.params;

	const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
	if (!result) throw HttpError(404);

	res.json(result);
};

module.exports = updateContact;
