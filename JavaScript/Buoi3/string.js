//có các khai báo ' ', " ", ` `
// let str1 = 'abc'
// console.log(str1);
// let hi = `${str1} "xyz"`
// console.log(hi);

//Tìm vị trí 1 ký tự đầu tiên là dùng indexOf, còn tìm vị trí cuối cùng là dùng lastIndexOf
let khoaHoc = "Android, iOS, Nodejs"
console.log(khoaHoc.indexOf('i', 2));

//
// //charAt trả về chuỗi ở vị trí nào đó
// console.log(khoaHoc.charAt(2));
//
// //lấy từ vị trí nào tới vị trí nào thì sử dụng hàm substring(vtd, vtc), substring(vtdt), khi đó nó sẻ lấy từ vị trí đó tới vị trí cuối cùng, không làm thay đổi đối tượng cũ
//
// //concat là hàm nối chuỗi
// console.log(khoaHoc.concat(', PHP')); //dùng trong nối chuỗi lớn, để tác vụ có thể sử dụng nhanh hơn
//
// //hàm chữ chữ hoa sa g chữ thượng và ngược lại topUpperCase, toLowerCase
//
// //tra ve thanh 1 mảng split()
// console.log(khoaHoc.split(', ')); //có thể thay thế
//
// //hàm replace thay thế một cái gì đó thanh một cái gì đó
// console.log(khoaHoc.replace(', ', '-')); //lưu ý chỉ trả về kết quả thaythe61 đầu tiên, còn nếu muốn trả về hết phải sử dụng for hay gì đó.
