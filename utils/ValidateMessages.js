const ValidateMessages = field => {
	return {
		"string.base": `${field} should be a type of 'text'`,
		"string.empty": `${field} cannot be an empty field`,
		"any.required": `missing required ${field} field`,
	};
};

module.exports = ValidateMessages;
