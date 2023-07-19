// bai 1:
function Users(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

function createUsers(customers) {
  const arrUser = customers.map(function (user) {
    return new Users(user.name, user.age, user.address);
  });

  for (i in customers) {
    var arr = customers[i].name.split(" ");
    var str = arr[0].concat(" " + arr[arr.length - 1]);
    arrUser[i].shortname = str;
  }
  arrUser.sort(function sortUsers(a, b) {
    return a.age - b.age;
  });

  return arrUser;
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

console.log(createUsers(customers));
// bai 2
