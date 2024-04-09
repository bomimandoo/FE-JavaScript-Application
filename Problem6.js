// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];


  const filtered =arr.filter((babylion) => babylion.part ==="fe");
  console.log(filtered);


  //수정
  const age= filtered.sort(function(a,b){return b-a});
  console.log(age);


  const key = filtered.map(key => ({ ...key, part: key.part.toUpperCase()}));
  console.log(key);
