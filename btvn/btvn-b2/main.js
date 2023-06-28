// Tính tiền taxi
var s = -50, price, total
if(s <= 120){
    if(s <= 0){
        console.log(`Số km không hợp lệ`);
        price = 0
    }
    else if(s<= 1){
        price = 15000
    }
    else if(s <= 5){
        price = 13500
    }
    else if(s <= 120){
        price = 11000
    }
    else{
    }
    total = price * s
}
else{
    price = 11000
    total = (price * s)*0.9
}
console.log(price);
console.log(`tien taxi la ${total}`);
// Tính tiền điện
console.log(`Bai 2`);
var soDien = -401, giaDien, tongTien
if(soDien > 0){
    if(soDien <= 50){
        giaDien = 1.678
        console.log(giaDien);
    }
    else if(soDien <= 100){
        giaDien = 1.734
        console.log(giaDien);
    }
    else if(soDien <= 200){
        giaDien = 2.014
        console.log(giaDien); 
    }
    else if(soDien <= 300){
        giaDien = 2.536
        console.log(giaDien); 
    }else if(soDien <= 400){
        giaDien = 2.834
        console.log(giaDien); 
    }
    else{
        giaDien = 2.927
        console.log(giaDien); 
    }
}
else{
    giaDien = 0
    console.log(`Số điện không hợp lệ`);
}
tongTien = giaDien * soDien
console.log(` Tổng tiền tiện là ${tongTien} `);
// Tính giai thừa
console.log(`Bai 3`);
var n = 10, result = 1;
var i = n
while(i > 1){
    result = result * i
    console.log(result);
    i = i- 1
}
console.log(`Giai thừa của ${n} là ${result}`);
// Viết chương trình kiểm tra 1 số có phải số nguyên tố hay không?
console.log(` Bài 4`);
var n = 29, temp = true
if(n < 2){
    temp = false;
}
else if(n == 2){
    temp =true;
}
else if(n % 2 == 0){
    temp = false
}
else{
    for( var i = 3; i < n/2 - 1; i += 2){
        if(n % i == 0){
            temp = false;
            break;
        }
    }
}
if(temp == false){
    console.log(`${n} không phải là số nguyên tố`);
}
else{
    console.log(`${n} là số nguyên tố`);

}