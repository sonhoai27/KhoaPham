let getAnError = ()=>{
  throw new Error('error roi')
}

try{
  getAnError()
}catch(e){
  console.log(e + ' ');
}

console.log('ket thuc');
