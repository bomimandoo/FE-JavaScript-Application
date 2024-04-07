//5번 문제

let user = {
  name: "예린",
  part: "FE",
};

let json = JSON.stringify(user);
//console.log(user);

let parsed = JSON.parse(json);
console.log(json);
