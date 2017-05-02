class Person {
  constructor(ten, tuoi) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.print = function () {
      console.log("hello " + this.ten);
    }
  }
  greet(){
    console.log("hello " + this.ten);
  }
}

// let ngA = new Person('Nguyen Hoai Son', 18)
// ngA.print();
// ngA.greet()

//khởi tạo một lớp mới kế thừa từ lớp cha Person

class Children extends Person{
  constructor(ten, tuoi, high){
    super(ten, tuoi)
    this.high = high;
  }
  addAge(){
    this.tuoi++;
  }
  greet(){
    console.log("Bạn tuổi là: " + this.tuoi);
  }
}

let ngB = new Children('bin', 21, 'HCM')
ngB.greet();
console.log(ngB);
ngB.addAge();
ngB.greet();
