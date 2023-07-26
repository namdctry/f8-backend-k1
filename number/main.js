var a = 2;
var b = "5.1";
var result = +a + +b;
console.log(typeof result);
console.log(result);
var c = "12a12";
console.log(parseInt(c));
var number = "30";
if (typeof number === "number" && parseInt(number) !== number) {
  console.log(`so lthuc`);
}
