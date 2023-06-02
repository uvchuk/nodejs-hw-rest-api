const express = require("express");

const {contactsCtrl} = require("../../controllers");
const {addSchema, updateFavoriteSchema} = require("../../models");
const {validateBody} = require("../../decorators");
const {isValidId} = require("../../middlewares");

const router = express.Router();

router.get("/", contactsCtrl.getAllContacts);

router.get("/:contactId", isValidId, contactsCtrl.getContact);

router.post("/", validateBody(addSchema), contactsCtrl.addContact);

router.put("/:contactId", isValidId, validateBody(addSchema), contactsCtrl.updateContact);

router.patch(
	"/:contactId/favorite",
	isValidId,
	validateBody(updateFavoriteSchema),
	contactsCtrl.updateStatusContact,
);

router.delete("/:contactId", isValidId, contactsCtrl.deleteContact);

module.exports = {router};
