const multer = require("multer");

const storage = multer.diskStorage({
  //destination for file storage
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },

  //max limit for upload
  limits: { fileSize: 1000000 }, // 10 mb

  filename: (req, file, cb) => {
    // cb(null, file.fieldname + "-" + Date.now() + ".mp4")
    cb(null, Date.now() + "-" + file.originalname);
  },
});



fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(png|jpg|jpeg|pdf|docx|xls|mp4|mkv)$/)) {

    return cb(new Error("Please upload valid format"));
  }
  cb(undefined, true);
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
})

module.exports={upload};
