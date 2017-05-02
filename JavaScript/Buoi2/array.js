//Mảng
//có hai cách khai bao mang
let arr = new Array()
let monH = ['Hoa', 'Ly', 'Sinh']

//thuộc tính của mảng Length
// console.log(arr.length)
// console.log(monH)

///javascript style guide

//truy cập từng phần tử mảng
// let i = 0;
// for (i; i < monH.length; i++) {
//     console.log(monH[i])
// }

//sử dụng array.forEach
monH.forEach((element, index) => console.log("Mình học môn: " + element + ":" + index));

//cách in ra hai dấu ::
// console.log(monH.join('::'));

//Thêm và xóa phần tử push, pop(bỏ đi phần tử ở cuối mảng),
//thêm phần tử và cxoa 1phan62 tử vào đầu mảng shift và unshift
// monH.push('Toan')
// console.log(monH);
//xoa phan tử bất kỳ trong mảng splice(vtri, soluong), in ra phần tử đã xóa, cũng có thể sử dụng phương thức splice
//let removed = monH.splice(2, 2)


//bài tập thêm phần tử vào mảng
function addToIndex(array, index, value) {
    for (var i = monH.length - 1; i >= index; i--) {
        array[i + 1] = array[i]
    }
    array[index] = value
    return array;
}

console.log(addToIndex(monH, 2, 'Japan'))
console.log(monH.length);

//co the dung ham splice
//ví dụ monH.splice(2, 0, 'drum');
