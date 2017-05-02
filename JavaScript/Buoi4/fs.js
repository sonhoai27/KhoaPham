//Các thao tác bất đồng bộ

//là một module xử lý file trong node js

let fs = require('fs')
//doxx file, ghi, xoa
fs.readFile(__dirname + '/a.txt', 'utf-8', (err, result) => {
  //err có tồn tại hay không
  if(err) return console.log(err);
  console.log(result);
})

//dia chi tương đối và tuyệt đối
//dia chi tương đối
// fs.readFile('./aa.txt', 'utf-8', (err, result) => {
//   //err có tồn tại hay không
//   if(err) return console.log(err);
//   console.log(result);
// })

fs.appendFile('./a.txt', 'hello node', err=>{

if(err) return console.log(err + ' ');
console.log('Ok');
})
