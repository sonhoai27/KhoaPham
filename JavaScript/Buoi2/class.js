// class Person {
//     constructor(name, age, soDu) {
//         this.name = name;
//         this.age = age;
//     }
//     xinChao() {
//         console.log(this.name + " " + this.age);
//     }
// }

// let Khoa = new Person("Khoa", 22)
// console.log(Khoa);
// Khoa.xinChao()

class toaDoDiem {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class TamGiac {
    constructor(canhA, canhB, canhC) {
        this.canhA = canhA;
        this.canhB = canhB;
        this.canhC = canhC;
    }
    tinhDoDai(diemA, diemB) {
        let canh1 = diemA.a - diemB.a;
        let canh2 = diemA.b - diemB.b;
        let canhHuyen = Math.sqrt(canh1 * canh1 + canh2 * canh2)
        return canhHuyen
    }
    tinhChuVi() {
        return this.tinhDoDai(this.canhA, this.canhB) + this.tinhDoDai(this.canhA, this.canhC) + this.tinhDoDai(this.canhB, this.canhC)
    }
}

let dA = new toaDoDiem(0, 0)
let dB = new toaDoDiem(1, 0)
let dC = new toaDoDiem(0, 1)

let tg = new TamGiac(dA, dB, dC);
console.log(tg.tinhChuVi());

//code cua thầy
// class Diem {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// class TamGiac {
//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     tinhChieuDai(diemA, diemB) {
//         let canh1 = diemA.x - diemB.x;
//         let canh2 = diemA.y - diemB.y;
//         let canhHuyen = Math.sqrt(canh1 * canh1 + canh2 * canh2)
//         return canhHuyen;
//     }
//     tinhChuVi() {
//         return this.tinhChieuDai(this.a, this.b) + this.tinhChieuDai(this.a, this.c) + this.tinhChieuDai(this.b, this.c)
//     }
// }
// let dA = new Diem(0, 0);
// let dB = new Diem(1, 0);
// let dC = new Diem(0, 1);

// let tg = new TamGiac(dA, dB, dC);
// console.log(tg.tinhChuVi());

//viết một lần, sử dụng một lần