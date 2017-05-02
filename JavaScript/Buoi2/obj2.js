// //doạn thẳng
// function Diem(a, b) {
//     this.a = a;
//     this.b = b;
// }

// function DoanThang(diemA, diemB) {
//     this.diemA = diemA;
//     this.diemB = diemB;
//     this.tinhChieuDai = function() {
//         let canh1 = this.diemA.a - this.diemB.a
//         let canh2 = this.diemA.b - this.diemB.b
//         let canhHuyen = Math.sqrt(canh1 * canh1 + canh2 * canh2)
//         return canhHuyen
//     }
// }

// let a = new Diem(0, 0)
// let b = new Diem(0, 1)

// let ab = new DoanThang(a, b)
// console.log(ab.tinhChieuDai());
//tam giác
function Diem(a, b) {
    this.a = a;
    this.b = b;
}

function DoanThang(canhA, canhB, canhC) {
    this.canhA = canhA;
    this.canhB = canhB;
    this.canhC = canhC;
    this.tinhChuVi = function() {
        return tinhDoDai(a, b) + tinhDoDai(a, c) + tinhDoDai(b, c)
    }

    function tinhDoDai(diemA, diemB) {
        let canh1 = diemA.a - diemB.a
        let canh2 = diemA.b - diemB.b
        let canhHuyen = Math.sqrt(canh1 * canh1 + canh2 * canh2)
        return canhHuyen
    }
}

let a = new Diem(0, 0)
let b = new Diem(0, 1)
let c = new Diem(1, 0)
let abc = new DoanThang(a, b, c)
console.log(abc.tinhChuVi());

//tái sử dụng function -- làm bài tập