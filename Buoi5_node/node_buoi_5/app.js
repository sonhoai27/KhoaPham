//express - rounting
let express = require('express')
let app = express()
app.listen(3000, ()=> console.log('Server Started'))
let parser = require('body-parser').urlencoded({extended: false})

//khai bao thu muc public de dung chung nhu la css img, media
app.use('/s', express.static('public'))
app.set('view engine', 'ejs')
//set thu muc de chua cac file ejs
app.set('views', './views')

// app.get('/', (req, res)=> res.send('hello'))

//học về et và post
//sử dụng parser để có thể hiển thị khi sử dụng post
//list of http status codes
class phepTinh {
  constructor(pt, a, b) {
    this.pt = pt;
    this.a = a;
    this.b = b;
  }

  getResult(){
    switch (this.pt) {
      case 'cong': return this.a + this.b;
      case 'tru': return this.a - this.b;
      case 'nhan': return this.a * this.b;
      case 'chia': return this.a / this.b;
    }
  }
}

app.post('/tinhtoan', parser ,(req, res)=>{
  let so1 = parseInt(req.body.so1)
  let so2= parseInt(req.body.so2)
  let pheptinh = req.body.phepTinh
  let tinh = new phepTinh(pheptinh, so1, so2);
  res.send('kq: '+ tinh.getResult());
})


app.get('/tinh', require('./controller/xulyTinh.js'));
// app.get('/tinh', (req, res)=>{
//   res.render('home', {isAdmin: true});
// })

//middleware
//la mot cong, truoc khi di vao cac get, post thi c=no se chay cai lenh function, co1 the bat cu thu gi,
//o moi router deu se hien thi, dieu di qua cai middleware, vi du dung de kiem tra khach hang co dang nhap chua.
//Muon bo qua cong middleware thi goi next()
//ve nha lam lai middleware (req, res, next) co the tai su dung middleware nhieu lan
