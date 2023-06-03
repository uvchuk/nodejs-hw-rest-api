const {isValidObjectId} = require("mongoose");

const {HttpError} = require("../utils");

const isValidId = (req, res, next) => {
	const {contactId} = req.params;
	if (!isValidObjectId(contactId)) next(HttpError(400, `${contactId} is invalid id`));
	next();
};

module.exports = isValidId;
