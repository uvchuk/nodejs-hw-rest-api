const express = require("express");
const auth = require("../../controllers/auth");
const {authSchema, updateSubscriptionSchema} = require("../../models");
const {validateBody} = require("../../decorators");
const authenticate = require("../../middlewares/authenticate");
const {upload} = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(authSchema), auth.signup);

router.post("/login", validateBody(authSchema), auth.signin);

router.get("/current", authenticate, auth.current);

router.post("/logout", authenticate, auth.logout);

router.patch("/", authenticate, validateBody(updateSubscriptionSchema), auth.updateSubscritionType);

router.patch("/avatars", upload.single("avatar"), authenticate, auth.updateUserAvatar);

module.exports = {router};
