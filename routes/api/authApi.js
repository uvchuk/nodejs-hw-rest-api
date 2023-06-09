const express = require("express");
const auth = require("../../controllers/auth");
const {authSchema} = require("../../models");
const {validateBody} = require("../../decorators");

const router = express.Router();

router.post("/register", validateBody(authSchema), auth.signup);

router.post("/login", validateBody(authSchema), auth.signin);

module.exports = {router};
