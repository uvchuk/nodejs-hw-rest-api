const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleMongooseError} = require("../middlewares");

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Set name for contact"],
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{versionKey: false, timestamps: true},
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const validateMessages = field => {
	return {
		"string.base": `${field} should be a type of 'text'`,
		"string.empty": `${field} cannot be an empty field`,
		"any.required": `missing required ${field} field`,
	};
};

const addSchema = Joi.object({
	name: Joi.string().required().messages(validateMessages("name")),
	email: Joi.string().required().messages(validateMessages("email")),
	phone: Joi.string().required().messages(validateMessages("phone")),
	favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
	favorite: Joi.boolean().required().messages(validateMessages("favorite")),
});

module.exports = {Contact, addSchema, updateFavoriteSchema};
