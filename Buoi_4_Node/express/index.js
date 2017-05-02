let express = require('express')
let app = express(); //tra về một function, thu75c thi function
app.listen(3000, function(){
  console.log('ok');
})

let handle = (req, res) => res.send('hello')
app.get('/', handle)
app.get('/admin', handle)

app.get('/show/:id/:name', (req, res)=>{
  let myId = req.params.id
  let myName = req.params.name
  //hoặc let {name} = req.params, .muốn làm vậy thì phải trùng tên
  //hoặc let {name, id} = req.params
  res.send('Toi nhan dc id: ' + myId +" có ten: " + myName)
})

// app.get('*', (req, res)=>{
//   res.send('ko ton tai')
// })

//lam bai tap

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

app.get('/tinh/:pheptinh/:so1/:so2', (req, res)=>{
  let so1 = parseInt(req.params.so1)
  let so2= parseInt(req.params.so2)
  let pheptinh = req.params.pheptinh
  let tinh = new phepTinh(pheptinh, so1, so2);
  res.send('kq: '+ tinh.getResult());
})

//cách khác xem tren git

//module export
