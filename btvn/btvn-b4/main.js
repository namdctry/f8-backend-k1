// Hiển thị N số Fibonaci đầu tiên
console.log(` Bài 1`);
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
k = 3;
for (i = k; i > 0; i--) {
  console.log(fibonacci(i));
}

// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược12345 = 10000 +2000 +300 +40 + 5 = 1 * 10^4
console.log(` Bài 2`);

function reverseNumber(n) {
  var result = 0;
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
    // console.log(n);
  }
  console.log(result);
}
reverseNumber(1234506);
function numberToString(n) {
  var temp, unitOfThousands, unitOfHundred, unitOfTen, unitOf, unit;
  unit = n % 10;
  switch (unit) {
    case 1:
      unit = "Một";
      break;
    case 2:
      unit = "Hai";
      break;
    case 3:
      unit = "Ba";
      break;
    case 4:
      unit = "Bốn";
      break;
    case 5:
      unit = "Năm";
      break;
    case 6:
      unit = "Sáu";
      break;
    case 7:
      unit = "Bảy";
      break;
    case 8:
      unit = "Tám";
    case 9:
      unit = "Chín";
    default:
      unit = "Mươi";
  }
  console.log(unit);
  //   hàng chục
  console.log(` Bài 3`);

  n = Math.floor(n / 10);
  unitOfTen = n % 10;
  switch (unitOfTen) {
    case 1:
      unitOfTen = "Một";
      break;
    case 2:
      unitOfTen = "Hai";
      break;
    case 3:
      unitOfTen = "Ba";
      break;
    case 4:
      unitOfTen = "Bốn";
      break;
    case 5:
      unitOfTen = "Năm";
      break;
    case 6:
      unitOfTen = "Sáu";
      break;
    case 7:
      unitOfTen = "Bảy";
      break;
    case 8:
      unitOfTen = "Tám";
    case 9:
      unitOfTen = "Chín";
    default:
      unitOfTen = "Mươi";
  }
  console.log(unitOfTen);
  // Hàng trăm
  n = Math.floor(n / 10);
  //   console.log(n);
  unitOfHundred = n % 10;
  //   console.log(unitOfHundred);
  switch (unitOfHundred) {
    case 1:
      unitOfHundred = "Một";
      break;
    case 2:
      unitOfHundred = "Hai";
      break;
    case 3:
      unitOfHundred = "Ba";
      break;
    case 4:
      unitOfHundred = "Bốn";
      break;
    case 5:
      unitOfHundred = "Năm";
      break;
    case 6:
      unitOfHundred = "Sáu";
      break;
    case 7:
      unitOfHundred = "Bảy";
      break;
    case 8:
      unitOfHundred = "Tám";
    case 9:
      unitOfHundred = "Chín";
    default:
      unitOfHundred = "Không";
  }
  unitOfHundred = unitOfHundred + " Trăm";
  console.log(unitOfHundred);
  // Hàng nghìn
  n = Math.floor(n / 10);
  unitOfThousands = n % 10;
  switch (unitOfThousands) {
    case 1:
      unitOfThousands = "Một";
      break;
    case 2:
      unitOfThousands = "Hai";
      break;
    case 3:
      unitOfThousands = "Ba";
      break;
    case 4:
      unitOfThousands = "Bốn";
      break;
    case 5:
      unitOfThousands = "Năm";
      break;
    case 6:
      unitOfThousands = "Sáu";
      break;
    case 7:
      unitOfThousands = "Bảy";
      break;
    case 8:
      unitOfThousands = "Tám";
    case 9:
      unitOfThousands = "Chín";
    default:
      unitOfThousands = "Không";
  }
  unitOfThousands = unitOfThousands + " Nghìn";
  console.log(unitOfThousands);
  return unitOfThousands + " " + unitOfHundred + " " + unitOfTen + " " + unit;
}
a = numberToString(1234);
console.log(a);
