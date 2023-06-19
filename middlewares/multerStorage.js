const path = require("path");
const multer = require("multer");

const tempDir = path.join("temp");

const storage = multer.diskStorage({
	destination: tempDir,
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage,
});

module.exports = upload;
