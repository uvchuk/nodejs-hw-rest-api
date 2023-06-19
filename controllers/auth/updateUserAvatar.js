const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const {User} = require("../../models");
const {HttpError} = require("../../utils");

const avatarsDir = path.join("public", "avatars");

const updateUserAvatar = async (req, res, next) => {
	if (!req.file) return next(HttpError(400, "You should select valid file"));
	const {path: tempFile, originalname} = req.file;
	const fileName = path.join(avatarsDir, originalname);

	try {
		Jimp.read(tempFile, (err, avatar) => {
			if (err) throw err;
			return avatar.resize(250, 250).write(fileName);
		});

		await fs.unlink(tempFile);
	} catch (err) {
		await fs.unlink(tempFile);
		return next(err);
	}

	const {_id} = req.user;
	await User.findByIdAndUpdate(_id, {avatarURL: fileName});
	res.json({
		fileName,
	});
};

module.exports = updateUserAvatar;
