function Add(a, b) {
    return a + b
}
var b = Add //gán nguyên cái function

console.log(b(6, 8))
    // 1 function có thề return ra một function khác
function getF(bool) {
    if (bool) {
        return function() {
            console.log('TRUE')
        }
    } else {
        return function() {
            console.log('False')
        }
    }
}

getF(true)()

//một func có thể là 1 tham số của một function
//function setTimeOut co 2 tham số
//co the lưu giá trị setTimeout vao mot biến
var f = function() {
    console.log("Hello")
}
setTimeout(f, 500)

//SỰ KHÁC NHAU GIỮA VAR VÀ LET
let a
if (true) {
    a = 100;
}
console.log(a)

//Nói về function Arrow function, tác dụng làm ngắn một cái function

var f = () => {
    console.log("Hello")
}
setTimeout(f, 500)

//viet dung rut gon function
var sq = (num) => console.log('Binh Phuong:', num * num)

setTimeout(() => sq(10), 500)
