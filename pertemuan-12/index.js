// string literals, Arrow function, default
//1.string literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;
console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

//2. Arrow function

//function biasa
function sayGreetings1(fullName) {
  return `Halo nama saya ${fullName}`;
}

console.log(sayGreetings1("Jeremy Purukan"));

const sayGreetings2 = (fullName) => `Halo nama saya ${fullName}`;

console.log(sayGreetings2("Jonathan"));

let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//default parameter
const sayGreetings3 = (fullName) => {
    if (fullName === undefined) {
        fullName = "kadek"
        console.log(`Hallo nama saya ${fullName}`);
    }
};
sayGreetings3();


