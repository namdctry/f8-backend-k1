// var serverUrl = "https://jsonplaceholder.typicode.com/posts";
// // fetch(serverUrl)
// //   .then(function (res) {
// //     console.log(res);
// //     return res.json();
// //   })
// //   .then(function (json) {
// //     console.log(json);
// //   });

// var getPosts = async function () {
//   var res = await fetch(serverUrl);
//   console.log(res);
//   var posts = await res.json();
//   console.log(posts);
// };
// getPosts();

var serverUrl = "https://jsonplaceholder.typicode.com/posts";
var postData = async function (data) {
  var res = await fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(res);
  var data = await res.json();
  console.log(data);
};
var data = {
  name: "name",
  age: 21,
};
postData(data);
