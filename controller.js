const multer = require("multer");

const storage = multer.diskStorage({
  //destination for file storage
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  //max limit for upload
  limits: { fileSize: 1000000 },// 10 mb

  filename: (req, file, cb) => {
    // cb(null, file.fieldname + "-" + Date.now() + ".mp4")
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "/image/jpeg" ||
    file.mimetype === "/image/jpg" ||
    file.mimetype === "/image/png"
  ) {
    cb(null, true);
  } 
//   else if (file.mimetype === "/file/pdf" || file.mimetype === "/file/docx") {
//     cb(null, true);
//   }
   else {
    cb({ message: "unsupported file types" }, false);
  }
};

module.exports. upload = multer({
  storage: storage,
  fileFilter: fileFilter,
})

// .single("user_file");
// module.exports.upload;
