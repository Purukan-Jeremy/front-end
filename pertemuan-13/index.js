// Res parameter & Spread operator
// Rest parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};

func1("A", "B", "C", "D", "E");

//Dengan rest parameter

const func2 = (...params) => {
  console.log(params);
};

func2("A", "B", "C", "D", "E");

//Rest Parameter harus berada di terakir dalam parameter list
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
  console.log(param1[1]);
};

func3("A", "B", "C", "D", "E");

// exe mini

// const penjumlahan = (a, b, c, d, e) => {
//   let arr = [a, b, c, d, e];
//   let hasil = 0;
//   arr.forEach((item) => (hasil += item));
//   return hasil;
// };
// console.log(penjumlahan(1, 2, 3, 4, 5));

const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5));

//spread operator

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//duplikasi array
let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers2);

//menggabungkan Array

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3);
let numbers4 = [...array1, ...array2, ...array3];

console.log(numbers3);
console.log(numbers4);

//duplikat objext
const john = {
    fullName : "John Doe",
    age :30,
};

const john2 = {...john, address: "manado"}

//menggabungkan objext

let obj1 = { a:1, b:2}
let obj2 = { c:3, d:4}

let combineObj = {...obj1,...obj2}
console.log(combineObj)