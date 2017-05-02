let multer = require('multer')
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function(req, file, cb){
    cb(null, req.body.userName + Date.now() + file.originalname);
    console.log(file); //tu dong nhan dien phan mo rong cua hinh: originalname
  }
})

function fileFilter(req, file, cb){
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') 
  {
    return cb(null, true)
  }
  cb(new Error('Sai dinh dang'))
}

module.exports = {
    multer,
    storage,
    fileFilter
}