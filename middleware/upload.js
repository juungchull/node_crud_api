const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const filFilter = (req, res, callback) => {
  const validExts = [".png", ".jpg", ".jpeg"];

  if (!validExts.includes(Path.extname(file.originalname))) {
    return callback(new Error("Only .png, .jpg & jpeg format allowed"));
  }

  const fileSize = parseInt(req.headers["Content-Length"]);
  if (fileSize > 1048576) {
    return callback(new Error("File size is Big"));
  }

  callback(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: filFilter,
  fileSize: 1048576,
});

module.exports = upload.single("productImage");
