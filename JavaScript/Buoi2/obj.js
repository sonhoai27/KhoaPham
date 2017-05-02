// let NhanVien = { name: 'Lam', age: '21' }
// console.log(NhanVien);
// console.log("Name: " + NhanVien.name)

// //Tạo lớp đối tượng
// function nhanVien(name, age) {
//     this.ten = name;
//     this.tuoi = age;
//     this.hello = function() {
//         console.log("Hello: ", this.ten);
//     }
// }
// let Son = new nhanVien("Son", 18)
// console.log(Son)
// console.log(Son.ten);
// Son.hello();

//bai tap tinh chu vi tam giac
function tamGiac(a, b, c) {
    this.canhA = a;
    this.canhB = b;
    this.canhC = c;
    this.tinhChuVi = () => this.canhA + this.canhB + this.canhC

}

let tamGiac1 = new tamGiac(2, 3, 5)
tamGiac1.tinhChuVi()

//tính độ dài đoạn thẳng Ab qua hai toạn độ A(x1, y1), B(x2, y2)

function doanThang(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.kq = () => {
        let canhA = (this.x1 - this.x2)
        let canhB = (this.y1 - this.y2)
        let canhHuyen = Math.sqrt(canhA * canhA + canhB * canhB)
        return canhHuyen
    }
}

let toaDo = new doanThang(0, 0, 0, 1)
console.log(toaDo.kq());

//bài tập tạo lớp đối tượng người(ten, tuoi, tang tuoi)

function People(name, age) {
    this.name = name;
    this.age = age;
    this.tangTuoi = () => {
        this.age++;
    }
}

let Khoa = new People("Khoa", 21)
console.log(Khoa);
console.log(Khoa.tangTuoi());
console.log(Khoa);