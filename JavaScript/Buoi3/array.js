function Person (ten, tuoi, salary){
    this.ten = ten;
    this.tuoi = tuoi;
    this.salary = salary;
    this.tang = ()=>{
        this.tuoi++;
    }
    this.hello = ()=> console.log("Xin chao toi ten la: " + this.ten);
}

let p1 = new Person("Khoa", 19, 100);
let p2 = new Person("Thanh", 24, 300);
let p3 = new Person("Thuy", 34, 90);
let p4 = new Person("Hoang", 39, 500);
let p5 = new Person("Hanh", 29, 1060);
let arr = [p1, p2, p3, p4, p5];

//in ra mang Object
let aFunction = (e, i)=>{
  console.log(e.ten);
}
arr.forEach(aFunction);
//de kiem tra 1 phần tử của mảng mà không cần sử dụng for thì sử dụng EVERY(kiem tra tất cả các phần tử có thỏa mãn ko nếu có thì trả vè true, còn nếu có 1 phần tử ko thỏa mãn thì trả về false)
//dấu => đã bao gồm có return rồi nên có thể bỏ đi return
let isBiggerThan80 = arr.every((e, i) =>{
  return e.salary > 200})
  // let isBiggerThan80 = arr.every(e =>{
  //  e.salary > 200})
console.log(isBiggerThan80);
//ngược lại với EVERY là SOME
//some tìm dc phần tử đầu tiên rồi cũng dừng, chỉ chạy một lần
let is300 = arr.some((e, i) =>{
  return e.salary = 200})
  console.log(is300);

  //Hàm Find trả về đối tượng thỏa mảng điều kiện
  let s90 = arr.find(e => e.salary == 90);
  console.log(s90);
  let t19 = arr.find(e => e.tuoi == 19);
  console.log(t19);
  //findIndex trả về vị trí của đối tượng trong mảng, và trả về vị trí đầu tiên nếu có 2 phần tử giống nhau, ch3 chạy một lần duy nhất
  let f34 = arr.findIndex(e => e.tuoi == 34);
  console.log(f34);

  //filter, lọc ra một cái gì đó, và kiểu trả về của nó là
  let older19 = arr.filter(e => e.tuoi > 19)
  console.log(older19);

  //sort nó sắp xếp theo bảng mã ascii

  let so = [1, 17, 2, 2, 6, 8, 1];
  let mang = so.sort();
  console.log(mang);

//compareFunction
  let mang2 = so.sort(function(a, b){
    if( a > b) return 1;
    if(a < b) return -1;
    return 0;
  })
  console.log(mang2);

//TRẢ về theo thứ tự từ thấp lên cao, và  ngược lại nếu thay thế 1 = -1, các cái sau cũng vậy thì sẽ trả về từ cao tới thấp
//cũng có thể ghi là return a.salary - b.salary; thì cũng trả về.
  let salarySS = arr.sort((a, b) =>{
    // if(a.salary > b.salary) return 1;
    // if(a.salary > b.salary) return -1;
    // return 0;
    return a.salary - b.salary;
  })

  console.log(salarySS);

//tạo mảng từ một mảng có sẵn MAP();
let mangMAP = [1, 3, 6, 9, 2]
let arrMAP = mangMAP.map(function(e, i){
  return e*2;
})

console.log(arrMAP);
