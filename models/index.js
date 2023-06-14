const {Contact, addSchema, updateFavoriteSchema} = require("./contact");
const {User, authSchema, updateSubscriptionSchema, updateAvatarSchema} = require("./user");

module.exports = {
	Contact,
	addSchema,
	updateFavoriteSchema,
	User,
	authSchema,
	updateSubscriptionSchema,
	updateAvatarSchema,
};
