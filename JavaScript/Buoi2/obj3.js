function Person(ten, tuoi, soDu) {
    this.ten = ten;
    this.tuoi = tuoi;
    let soDuTK = soDu; //thuoc tính dang private
    this.getSoDU = function() {
        return soDuTK //in ra
    }

    this.setSoDu = function(soDuMoi) {
        soDuTK = soDuMoi //khoi tao lai
    }
}

let ps = new Person("Khoa", 21, 1000)
console.log(ps.ten);
console.log(ps.tuoi);
console.log(ps.getSoDU());
ps.setSoDu(1200);
console.log(ps.getSoDU());