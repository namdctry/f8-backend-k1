// Cho 1 số nguyên bất kỳ, hiển thị danh sách các số chẵn và số lẻ
function bai1(n){
    
    console.log(`Số chẵn:`);
    for(var i = 1; i < n; i++){
        if(i % 2 ===0){
            console.log(`${i} `);
        }

    }
    console.log(`Số lẻ:`);
    for(var i = 1; i < n; i++){
        if(i % 2 !==0){
            console.log(`${i} `);
        }

    }
    

}
bai1(10)
// Cho trước số nguyên n. Tính giá trị biểu thức sau S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

function bai2(n){
    var total = 0;
    for(var i = 1; i <= n; i++){
        // console.log(`${i}----${n}`);
        total += i*(i+1)
    }
    return total
}
console.log(` Bài 2: ${bai2(3)}`);


// Cho trước 2 số a, b. Tính tổng số chẵn và số lẻ trong khoảng từ a đến b
console.log(`Bài 3:`);
function oddTotals(a, b){
    var total = 0;
    for(a; a <= b; a++){
        if(a % 2 !== 0){
            total += a;
        }
    }
    return total;
}
console.log(`tong so le:${oddTotals(5,9)}`);
function evenTotals(a, b){
    var total = 0;
    for(a; a <= b; a++){
        if(a % 2 === 0){
            total += a;
        }
    }
    return total;
}
console.log(`tong so chan:${evenTotals(5,9)}`);
//Viết 1 hàm kiểm tra 1 số có phải số nguyên tố hay không?
console.log(`Bài 4:`);
function checkPrimes(n){
    if(Number.isInteger(n)){
        var check = true;
        if(n < 2){
            return check = false;
        }
        else if(n === 2){
            return check = true;
        }
        else{
            for(i = 2; i < Math.sqrt(n); i++){
                console.log(check);
                if(n % i === 0){
                    console.log(`dayyyyyy`);
                    return check = false;
                }
            }
            
            return check;
        }
        return check;
    }
    else{
        return false;
    }
}
if(checkPrimes(12)){
    console.log(` Số nguyên tố`);
}
else{
    console.log(` Không là số nguyên tố`);
}

// Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N
console.log(`Bài 5:`);

var s = 0
function bai5(n) {
    if(n <= 0){
        return;
    }
    s += 1/n
    bai5(n-1)
    return s
}

console.log(bai5(3));