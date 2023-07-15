var arr1 = [1, 2, 5, 9];
var arr2 = [2, 3, 4, 5, 9];
var same = arr1.reduce(function (prev, cur) {
  if (arr2.includes(cur)) {
    prev.push(cur);
  }
  return prev;
}, []);
console.log(same);

// bai 2
console.log("BÀI 2");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function GetFlatten(array) {
  return array.reduce(function (prev, cur) {
    return prev.concat(Array.isArray(cur) ? GetFlatten(cur) : cur);
  }, []);
}
console.log(GetFlatten(arr));
// bài 3
console.log("BÀI 3");
var arr = [
  ["a", 1, true, "c", 3, 5],
  ["b", 2, false],
];

function getElementByDataType(arr) {
  var result = [];
  var typeMap = {};
  flattenArr = GetFlatten(arr);
  flattenArr.forEach(function (value) {
    var type = typeof value;

    if (typeMap[type] !== undefined) {
      result[typeMap[type]].push(value);
    } else {
      var newArr = [value];
      result.push(newArr);
      typeMap[type] = result.length - 1;
    }
  });
  return result;
}
console.log(getElementByDataType(arr));
