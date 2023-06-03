const {ctrlWrapper} = require("../../decorators");
const getAllContacts = require("../contacts/getAllContacts");
const getContact = require("../contacts/getContact");
const addContact = require("../contacts/addContact");
const updateContact = require("../contacts/updateContact");
const updateStatusContact = require("../contacts/updateStatusContact");
const deleteContact = require("../contacts/deleteContact");

const contacts = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContact: ctrlWrapper(getContact),
	addContact: ctrlWrapper(addContact),
	updateContact: ctrlWrapper(updateContact),
	updateStatusContact: ctrlWrapper(updateStatusContact),
	deleteContact: ctrlWrapper(deleteContact),
};

module.exports = contacts;
