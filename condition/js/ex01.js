var month = 11;
var year = 2002;
console.log();
if(month % 1 === 0 && year % 1 === 0 && month >= 1 && month <= 12){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(`31`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`30`);
            break;
        default:

            if(year % 4 === 0) {
                console.log(`29`);
            }
            else{
                console.log(`28`);
            }
            break;
        }
}
else{
    console.log(`error`);
}

a = 5
b = 2
c = a/b
console.log(c);
sd = c % 1
console.log(sd);
console.log(c - sd);