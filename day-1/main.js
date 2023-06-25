
var a = -1, b = 3, c = 2, s
// bai 1:
c = a
a = b
b = c
console.log("bai 1:")
console.log(a, b)

// bai 2:Viết chương trình tính toán biểu thức sau
// S = 10 + 20 + 5^10 / 2
console.log("bai 2:")
s = 10 + 20 + Math.pow(5, 10) / 2
console.log(s)


// bai 3
// Cho trước 3 số a, b, c
// Tìm số lớn nhất trong 3 số và hiển thị kết quả
s = a
if(s<b){
    s = b
}
if(s < c){
    s = c
}
console.log("bai 3:")
console.log(s)
// # Bài 4: Kiểm tra số cùng dấu
// Cho trước 2 số a, b
// Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
console.log("bai 4:")
if(a > 0 && b >0){
    console.log(a, b)
}
if(a < 0 && b < 0){
    console.log(a, b)
}
else{
    console.log("2 so khac dau")
}

// # Bài 5: Sắp xếp 3 số
// Cho trước 3 số a, b, c
// Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
a = 6, b = 8, c = 2
var temp
console.log(a, b, c)
if(a > b){
    temp = a
    a = b
    b = temp
}
if(a > c){
    temp = a
    a = c
    c = temp
}
if(b > c){
    temp = b
    b = c
    c = temp
}
console.log(a, b, c)