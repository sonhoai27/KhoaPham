let express = require('express')
let app = express()

let multer = require('./controllers/storage')
let upload= require('./controllers/upload')
// let multer = require('multer')
// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './upload');
//   },
//   filename: function(req, file, cb){
//     cb(null, req.body.userName + Date.now() + file.originalname);
//     console.log(file); //tu dong nhan dien phan mo rong cua hinh: originalname
//   }
// })
// let upload = multer({dest: './upload'})


//storage
// var upload = multer({ storage: storage })


//err, filefiler
// function fileFilter(req, file, cb){
//   if(file.minmtype === 'image/jpeg' || file.mimetype === 'image/png')
//   {
//     return cb(null, true)
//   }
//   cb(new Error('Sai dinh dang'))
// }

// var upload = multer({
//   storage,
//   limits: {fileSize: 12 * 1024},
//   fileFilter: fileFilter
//  }).single('avatar')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.listen(3001, (req, res)=>{
  console.log("server Ok");
})
app.get('/', (req, res)=>{
  res.render('home')
})

// app.post('/signup', upload.single('avatar'), (req, res)=>{
//   console.log(req.body);
//    res.send('Entered route');
// })

//su dung them tham so err
app.post('/signup', (req, res)=>{
  upload(req, res, err=>{
    if(err) return res.send(err + '') //phai chuyen ve string
    res.send("Entered route")
  })
})

//filefiler va limit
