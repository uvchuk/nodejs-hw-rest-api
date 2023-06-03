const {Contact} = require("../../models");
const {HttpError} = require("../../utils");

const deleteContact = async (req, res) => {
	const {contactId} = req.params;

	const result = await Contact.findByIdAndDelete(contactId);
	if (!result) throw HttpError(404);

	res.json({message: "contact deleted"});
};

module.exports = deleteContact;
