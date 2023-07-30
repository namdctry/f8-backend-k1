console.log("Bài 1");
function sum(...rest) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    value = Number(rest[i]);
    if (isNaN(value)) {
      throw new Error("dữ liệu truyền vào không hợp lệ");
    }
    sum += value;
  }
  return sum;
}
// console.log(sum("aa", 2, "9", 3, 4, 32));
console.log(sum("1", 2, "9", 3, 4, 32));

// bài 2 viết bằng function
console.log("Bài 2 viết bằng function");
// function openFile2(fn) {
//   setTimeout(function () {
//     console.log("file đã được mở");
//     fn();
//   }, 2000);
// }
// function readFile2(fn) {
//   setTimeout(function () {
//     console.log("F8- Học lập trình để đi làm");
//     fn();
//   }, 1000);
// }
// function closeFile2() {
//   setTimeout(function () {
//     console.log("File đã đóng");
//   }, 1000);
// }

// openFile2(function () {
//   readFile2(function () {
//     closeFile2();
//   });
// });

// bài 2 viết với promise
console.log("Bài 2 viết bằng promise");
function openFile() {
  var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("File đã được mở");
    }, 2000);
  });
  return myPromise;
}
function readFile() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("F8- Học lập trình để đi làm");
    }, 1000);
  });
  return myPromise;
}
function closeFile() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("File đã đóng");
    }, 1000);
  });
  return myPromise;
}
openFile()
  .then(function (response) {
    console.log(response);
    return readFile();
  })
  .then(function (response) {
    console.log(response);
    return closeFile();
  })
  .then(function (response) {
    console.log(response);
  });
