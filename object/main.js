// function Competitor(name, dame, hp, df, counterAttack) {
//   this.name = name;
//   this.dame = dame;
//   this.hp = hp;
//   this.df = df;
//   this.counterAttack = counterAttack;
//   this.attack = function (competitor) {
//     competitor.hp = competitor.hp - this.dame + competitor.df;
//     this.hp -= competitor.counterAttack;
//   };
// }

// Competitor.prototype.type;

// const dog = new Competitor("dog", 20, 100, 10, 2);
// const cat = new Competitor("cat", 15, 120, 12, 13);
// let i = 1;
// while (dog.hp > 0 && cat.hp > 0) {
//   console.log(`đánh lần ${i}`);
//   i++;
//   dog.attack(cat);
//   console.log(cat.hp);
//   if (cat.hp <= 0) {
//     console.log(`cat die`);
//     break;
//   }
//   cat.attack(dog);
//   console.log(dog.hp);
//   if (dog.hp <= 0) {
//     console.log(`dog die`);
//     break;
//   }
// }

// Object.prototype.getMessage = function () {
//   return `Hello NAM`;
// };
// function Customer() {
//   this.name = "adfoaif";
// }
// var nam = new Customer();
// console.log(nam.name);

// var users = {
//   name: "NAMMMM",
//   email: "nam02bv@gmail.com",
//   age: 31,
// };
// var customers = {
//   service: "Đào tạo",
// };
// var newObject = {};
// Object.keys(users).forEach(function (key) {
//   console.log(users[key]);
//   for (var i in key) {
//     newObject = { i: users[key] };
//   }
// });
// console.log(newObject);
// console.log(Object.keys(users));

// var Users = function () {
//   this.name = "hoàng an";
// };
// var user = new Users();
// console.log(Users.prototype);

// var products = [
//   false,
//   null,
//   ["sản phẩm 1"],
//   {
//     name: "Nồi cơm điện",
//     price: 10000,
//   },
//   {
//     name: "Máy bơm",
//   },
//   {
//     name: "Tủ lạnh",
//     price: 14000,
//   },
// ];
// function isObject(value) {
//   return typeof value === "object" && value !== null && !Array.isArray(value);
// }

// result = {};

// products.forEach(function (product) {
//   if (product && product.price) {
//     console.log(product);
//     console.log(Object.keys(result).length);
//     if (!Object.keys(result).length) {
//       result = product;
//     } else {
//       if (result.price < product.price) {
//         result = product;
//       }
//   }
// });
// console.log(result);

Array.prototype.map2 = function (callback) {
  var result = [];
  for (i = 0; i < this.length; i++) {
    result[result.length] = callback(this[i], i);
  }
  return result;
};

var users = ["item 1", "2", "3"];
var result = users.map2(function (user) {
  return user;
});
console.log(result);

var a = [];
console.log(a.length);
console.log(Array.prototype);
