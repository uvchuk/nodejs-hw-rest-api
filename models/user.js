const {Schema, model} = require("mongoose");
const Joi = require("joi");
const {handleMongooseError} = require("../middlewares");
const {ValidateMessages} = require("../utils");

const subscriptionTypes = ["starter", "pro", "business"];

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		subscription: {
			type: String,
			enum: subscriptionTypes,
			default: "starter",
		},
		token: String,
	},
	{versionKey: false, timestamps: true},
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const authSchema = Joi.object({
	email: Joi.string().required().messages(ValidateMessages("email")),
	password: Joi.string().required().messages(ValidateMessages("phone")),
	subscription: Joi.string().equal(...subscriptionTypes),
});

module.exports = {User, authSchema};
