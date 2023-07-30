// function getA(fn) {
//   setTimeout(function () {
//     console.log("get A");
//     fn();
//   }, 1000);
// }
// function getB(fn) {
//   setTimeout(function () {
//     console.log(`get B`);
//     fn();
//   }, 1000);
// }

// function getC() {
//   console.log(`get C`);
// }

// getA(function () {
//   getB(function () {
//     getC();
//   });
// });

// function getA() {
//   var myPromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const fn = () => {
//         const bool = false;
//         return bool;
//       };
//       //   data = "getA";
//       // if
//       resolve(data);
//       //   reject("looix");
//     }, 4000);
//   });
//   return myPromise;
// }
// function getB() {
//   console.log(`getB`);
// }
// console.log(getA());
// getA()
//   .then(function (response) {
//     console.log(response);
//     getB();
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// async function
// var getA = function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject("Error 200");
//     }, 1000);
//   });
// };
// var getB = function () {
//   return "Hiển thị kết quả";
// };
// var showResult = async function () {
//   try {
//     var response = await getA();
//     var response2 = getB();
//     console.log(response);
//     console.log(response2);
//   } catch (e) {
//     console.log(e);
//   }
// };
// showResult();

// function getA() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Get A");
//     }, 1000);
//   });
// }
// function getB() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Get B");
//     }, 1000);
//   });
// }

// function getC() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Get C");
//     }, 1000);
//   });
// }

// var showResult = async function () {
//   try {
//     var res1 = await getA();
//     console.log(res1);
//     var res2 = await getB();
//     console.log(res2);
//     var res3 = await getC();
//     console.log(res3);
//   } catch (e) {
//     console.log(e);
//   }
// };
// showResult();

var request = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const response = {
        getData: function () {
          return new Promise(function (resolve) {
            resolve("Get Data");
          });
        },
      };
      resolve(response);
    }, 1000);
  });
};

// var showData = async function () {
//   var res = await request();
//   var data = await res.getData();
//   console.log(data);
// };
// showData();

(async function () {
  var res = await request();
  var data = await res.getData();
  console.log(data);
})();
