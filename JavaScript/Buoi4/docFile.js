//làm bài tập
let fs = require('fs')
fs.readFile(__dirname + '/doc.txt','utf-8' ,(err, result)=>{
  if(err) return console.log("Loi file roi")
  console.log(result.toString())
})

//thêm vào file có sẵn

fs.appendFile(__dirname + '/doc.txt', 'He lives in HCM city', err =>{
  if(err) return console.log(err + ' ')
  console.log('OK');
})
