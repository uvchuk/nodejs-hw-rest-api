const {Contact, addSchema, updateFavoriteSchema} = require("./contact");
const {User, authSchema, updateSubscriptionSchema, resendCodeSchema} = require("./user");

module.exports = {
	Contact,
	addSchema,
	updateFavoriteSchema,
	User,
	authSchema,
	updateSubscriptionSchema,
	resendCodeSchema,
};
