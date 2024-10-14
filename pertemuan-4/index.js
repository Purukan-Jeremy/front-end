// variable dan operator
// 1.javascript variable
let fullName ="John Doe"; //camel case
let full_name = "John Doe"; //snake case
let FullName = "John Doe"; //pascal case

const gender = "male" //string
let age = 30;
age = 31; //number
weight = 34.7;
let isMarried = true; //boolean
let grade = null //null
let address; //undefined
//5 tipe data javascript number,boolean,null,undefined

console.log(typeof fullName);
console.log(typeof gender);
console.log(typeof age);
console.log(typeof weight);
console.log(typeof isMarried);
console.log(grade);
console.log(typeof address);

//2. javascript operators
//a. arithmetic operator 
let bil1 =20;
let bil2 = 5;

console.log(bil1 + bil2);
console.log(bil1 - bil2);
console.log(bil1 * bil2);
console.log(bil1 / bil2);
console.log(bil1 % bil2);
console.log(bil1 ** bil2);

let alas = 5;
let tinggi = 5;
let luas = 0.5 * alas * tinggi;
console.log(luas);

//b.assignment operator

let bilangan = 10
bilangan += 10

//c string operator
let firstName ="John"
let lastName1 = "Doe"
let fullName1 = firstName + " " + lastName1;
console.log(fullName1);

//d.relational operator
let bilangan1 = 10;
let bilangan2 = 10;
let bilangan3 = "10";
console.log(bilangan1 == bilangan2);
console.log(bilangan1 === bilangan2);
console.log(bilangan1 === bilangan3);

console.log(bilangan1 > bilangan2);

//e. ternary operator
let umur = 17;
let isEligible = age >= 17 ? "bisa buat ktp" : "jangan ya dek ya";
console.log(isEligible);

//f. logical operator ($$, ||, !)

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || false);

console.log(!true);
console.log(!false);