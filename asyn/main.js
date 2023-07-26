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

function getA() {
  var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fn = () => {
        const bool = false;
        return bool;
      };
      //   data = "getA";
      // if
      resolve(data);
      //   reject("looix");
    }, 4000);
  });
  return myPromise;
}
function getB() {
  console.log(`getB`);
}
console.log(getA());
getA()
  .then(function (response) {
    console.log(response);
    getB();
  })
  .catch(function (err) {
    console.log(err);
  });
