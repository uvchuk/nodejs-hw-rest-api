const express = require("express");
const auth = require("../../controllers/auth");
const {authSchema} = require("../../models");
const {validateBody} = require("../../decorators");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

router.post("/register", validateBody(authSchema), auth.signup);

router.post("/login", validateBody(authSchema), auth.signin);

router.get("/current", authenticate, auth.current);

router.post("/logout", authenticate, auth.logout);

module.exports = {router};
