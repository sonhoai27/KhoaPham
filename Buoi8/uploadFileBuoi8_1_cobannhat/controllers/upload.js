let {multer, storage, fileFilter }= require('./storage')
let upload = multer({
  storage,
  limits: {fileSize: 12 * 1024},
  fileFilter: fileFilter
 }).single('avatar')

 module.exports = upload