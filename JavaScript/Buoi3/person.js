//object đối tượng property
// function Person (ten, tuoi){
//     this.ten = ten;
//     this.tuoi = tuoi;
//     this.tang = ()=>{
//         this.tuoi++;
//     }
//     this.hello = ()=> console.log("Xin chao toi ten la: " + this.ten);
// }

// let p1 = new Person("Hoa", 18);
// console.log(p1);
// p1.hello();
// p1.tang();
// console.log(p1);

//Khai báo dạng class
class Person {
    constructor(ten, tuoi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.addAge = () => this.tuoi++;
        this.hello = () => console.log("hello " + this.ten + " " + this.tuoi);
    }
}

let p1 = new Person("Hoa", 19);
// p1.addAge();
// p1.hello();
// console.log(p1);
//
// p1.sales = 100;
// p1.showSales = function() {
//     console.log(this.sales);
// }
// console.log(p1);
// p1.showSales();

//sử dụng prototype
let p2 = new Person("Lam", 15);

Person.prototype.showInfo = function() {
    console.log(this.ten + ", " + this.tuoi + ", ");
};

// console.log(p1);
// console.log(p2);
// p1.showInfo();
// p2.showInfo();

//sử dụng alias copy 1 đối tượng
//khi copy chỉ có thuộc tính không còn phương thức
let p3  = Object.assign({}, p1);
p1.ten = "Huong"
console.log(p3);
// console.log(p1);

//in ra dang JSON
console.log(JSON.stringify(p1)); //trả về các thuộc tính thôi
