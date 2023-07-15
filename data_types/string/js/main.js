// var fullName = `Hoàng An Tạ`;
// var fullName2 = String(132);
// var fullName3 = new String("nam");
// var b = fullName2 + 8;
// console.log(b);
// console.log(fullName);
// console.log(fullName2, typeof fullName2);
// console.log(fullName3);
// console.log(String.prototype);
// console.log(fullName.charCodeAt(5));
// var str = "a2bcdef123456";
// console.log(str.slice(1, 6));
// index = str.indexOf(2);
// console.log(index);
// console.log(str.replaceAll("2", "222222"));
// // trim() xóa khoảng trắng đầu và cuối chuỗi
// var str2 = "Học lập trình tại f9";
// console.log(str2.split(""));
// var email = "hoangan.web@gmail.com";
// console.log(email.split("@")[0]);

// var password = `HJFOJbkAFa!F8`;
// var checkLength = false,
//   checkNumber = false,
//   checkLower = false,
//   checkUpper = false,
//   checkSymbol = false;
// console.log(password.length);
// if (password.length >= 8) {
//   checkLength = true;
// }
// var countUpper = 0;
// var countLower = 0;
// for (var i = 0; i < password.length; i++) {
//   var char = password.charAt(i);
//   var number = "0123456789";
//   var symbol = "!@#$%^&*";
//   if (number.includes(char)) {
//     checkNumber = true;
//   }
//   if (symbol.includes(char)) {
//     checkSymbol = true;
//   }
//   if (char >= "A" && char < "Z") {
//     checkUpper = true;
//     countUpper++;
//   }
//   if (char >= "a" && char < "z") {
//     checkLower = true;
//     countLower++;
//   }
// }
// console.log(checkLength, checkNumber, checkSymbol, checkUpper, checkLower);
// console.log(countUpper, countLower);

// var html = `<h1>Học lập trình tại F8</h1>`;
// var content = `Lorem ipsum dolor, sit amet consectetur adipisicing consectetur
//    elit. Error doloribus est quam veniam voluptatum accusamus, magni sed illo necessitatibus provident ab molestias magnam laborum praesentium consequatur vitae soluta. Omnis cum a accusamus libero delectus saepe optio, voluptates molestias eos sapiente, provident aliquid dicta temporibus, molestiae qui iure accusantium consectetur quod dolorem pariatur nesciunt! Adipisci magni at praesentium, possimus temporibus eligendi debitis eaque. Quibusdam dignissimos quidem quam tenetur nam odio voluptatibus quod unde optio tempora laudantium ipsam, recusandae, possimus perspiciatis. Minima accusantium placeat, molestias porro quibusdam ratione ea nobis sunt optio? Doloribus in dolore adipisci. Nostrum nesciunt suscipit voluptatibus corporis? Laudantium.`;
// var keyword = "consectetur";
// var position = content.indexOf(keyword);
// var firstContent = content.slice(0, position);
// content = content.slice(position);

// content =
//   firstContent +
//   "<span>" +
//   content.slice(0, keyword.length) +
//   "</span>" +
//   content.slice(keyword.length);
// console.log(content);
// document.write(content);

var content = `Lorem ipsum dolor, sit amet consectetur adipisicing consectetur elit. Error doloribus est quam veniam voluptatum accusamus, magni sed illo necessitatibus provident ab molestias magnam laborum praesentium consequatur vitae soluta. Omnis cum a accusamus libero delectus saepe optio, voluptates molestias eos sapiente, provident aliquid dicta temporibus, molestiae qui iure accusantium consectetur quod dolorem pariatur nesciunt! Adipisci magni at praesentium, possimus temporibus eligendi debitis eaque. Quibusdam dignissimos quidem quam tenetur nam odio voluptatibus quod unde optio tempora laudantium ipsam, recusandae, possimus perspiciatis. Minima accusantium placeat, molestias porro quibusdam ratione ea nobis sunt optio? Doloribus in dolore adipisci. Nostrum nesciunt suscipit voluptatibus corporis? Laudantium.`;
var keyword = "consectetur";
var position = content.indexOf(keyword);
var contentFind = "";
while (position !== -1) {
  var firstContent = content.slice(0, position);
  content = content.slice(position);
  contentFind =
    contentFind +
    firstContent +
    "<span>" +
    content.slice(0, keyword.length) +
    "</span>";
  content = content.slice(keyword.length);
  var position = content.indexOf(keyword);
}
content = contentFind + content;
document.write(content);
console.log(content);
