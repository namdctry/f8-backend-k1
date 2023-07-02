// var A = function (value) {
//     console.log(`A func ${value}`);
// }
// var B = function (fn) {
//     fn()
// }
// B(function() {
//     A("F8")
// })  
// tìm hiểu trc : callback, closure

/**
 * Expected
 * sumPrime(5) // output: 10;
  * sumPrime(10) // output: 17;
 */
function sumPrime(n){
    var total = 0;
    var check = true;
    for(var j = 2 ; j <= n; j++){
        check = true
        if(j === 2){
            check = true
        }
        else{
            for(var i = 2; i <= Math.sqrt(j); i++){
                // console.log(j);
                if(j % i == 0){
                    check = false;
                    break;
                }
            }
    
        }
        if(check){
            console.log(j);
            total += j
        }
    }
    return total
    
// }

function sumPrime(n){
    var total = 0;
    var check = true;
    for(var j = 2 ; j <= n; j++){
        check = true
        if(j === 2){
            check = true
        }
        else{
            for(var i = 2; i <= Math.sqrt(j); i++){
                if(j % i == 0){
                    check = false;
                    break;
                }
            }
    
        }
        if(check){
            console.log(j);
            total += j
        }
    }
    return total
    
}
console.log(sumPrime(10));