let getAnError = () =>{
  throw new Error('error roi')
}
try{
  getAnError()
}catch(e){
  console.log(e + '');
}
console.log('ket thuc');

//bai tap so sanh diem

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Line{
  constructor(diemA, diemB){
    if(diemA.x == diemA.x && diemA.y == diemB.y) throw new Error('2 diem khong duoc trung nhau')
  }
}

let a1 = new Point(1, 1);
let a2 = new Point(1, 1);

let ab = new Line(a1, a2);
