const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleMongooseError} = require("../middlewares");
const {ValidateMessages} = require("../utils");

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
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
		},
	},
	{versionKey: false, timestamps: true},
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

const addSchema = Joi.object({
	name: Joi.string().required().messages(ValidateMessages("name")),
	email: Joi.string().required().messages(ValidateMessages("email")),
	phone: Joi.string().required().messages(ValidateMessages("phone")),
	favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
	favorite: Joi.boolean().required().messages(ValidateMessages("favorite")),
});

module.exports = {Contact, addSchema, updateFavoriteSchema};
