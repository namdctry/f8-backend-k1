// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript
console.log("Bài 2:");
Array.prototype.reduce2 = function (callback, initialValue) {
  for (var i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

const array2 = [1, 2, 3, 4];
const ex1 = array2.reduce2(function (acc, cur) {
  console.log(acc, cur);
  return acc + cur;
}, 0);
console.log(ex1);

// bai 3
console.log("Bài 3:");
Array.prototype.filter2 = function (callback) {
  var result3 = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result3.push(this[i]);
    }
  }
  return result3;
};

const array3 = [1, 2, 3, 4, 8];
let ex2 = array3.filter2(function (element) {
  return element % 2 == 0;
});
console.log(ex2);
// bai 4:
console.log("Bài 4:");
Object.prototype.getCurrency = function (currency) {
  char = this.split("");
  for (let i = -3; i > -char.length; i -= 4) {
    char.splice(i, 0, ",");
  }
  return char.join("") + currency;
};
var price = "1220000111000";
console.log(price.getCurrency("Vnd"));
