let express = require('express')
let app = express()
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
// let upload = multer({dest: './upload'})
var upload = multer({ storage: storage })

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.listen(3001, (req, res)=>{
  console.log("server Ok");
})
app.get('/', (req, res)=>{
  res.render('home')
})
app.post('/signup', upload.single('avatar'), (req, res)=>{
  console.log(req.body);
   res.send('Entered route');
})
