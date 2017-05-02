//Extend mở rộng
class Person {
  //hàm khởi tạo
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log('hello' + ': ' + this.name);

  }
}

let p1 = new Person("Khoa", 12)
console.log(p1);

//khi extends thì có tất cả các phương thức và thuộc tính của lớp extends vào.
//đôi khi muốn thay đổi lớp cha, ghi đè lên thì ghi lại các hàm cùng tên(phương thức giống lớp cha); mục đích để ghi đè lên
class Children extends Person{
  constructor(name, age, hobby){
    //chỉ đến class cho, nếu ko thì nó ko hiểu là khởi tạo đè lên class cha
    super(name, age);
    this.hobby = hobby;
  }
  addAge(){
    this.age++;
  }
  //ghi đè lên lớp cha
  greet(){
    console.log('hello');
  }
}
let c1 = new Children('bin', 4);
c1.greet();
c1.addAge();
console.log(c1);
//sau khi thay đổi phương thức lớp cha
c1.greet();

//muốn thêm một phương thức thì phải ghi đè lên phương thức khởi tạo contructor
let c2 = new  Children('kha', 21, 'auto');
console.log(c2);
