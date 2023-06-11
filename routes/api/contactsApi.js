const express = require("express");
const contacts = require("../../controllers/contacts");
const {addSchema, updateFavoriteSchema} = require("../../models");
const {isValidId} = require("../../middlewares");
const {validateBody} = require("../../decorators");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

router.use(authenticate);

router.get("/", contacts.getAllContacts);

router.get("/:contactId", isValidId, contacts.getContact);

router.post("/", validateBody(addSchema), contacts.addContact);

router.put("/:contactId", isValidId, validateBody(addSchema), contacts.updateContact);

router.patch(
	"/:contactId/favorite",
	isValidId,
	validateBody(updateFavoriteSchema),
	contacts.updateStatusContact,
);

router.delete("/:contactId", isValidId, contacts.deleteContact);

module.exports = {router};
