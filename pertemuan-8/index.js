//Javascript object & conditional

let john = {
  firstName: "John",
  age: 30,
  isMarried: true,
  grade: [80, 90, 100],
  sayGreetings: function () {
    console.log("Hello my name is " + this.firstName);
  },
  address: {
    street: "Jl. Arnold Mononutu Airmadidi",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
    postalcode: "9531",
  },
};

console.log(john);
//mengakses properti dalam object
//1. dot notation
console.log(john.firstName);
console.log(john.age);
john.age = 31;
console.log(john.age);
john.job = "Teacher";
console.log(john);
//2. bracket notation
console.log(john["isMarried"]);
john["Nationality"] = "Indonesia";
console.log(john);

//object method

john.sayGreetings();

//object inside object

console.log(john.address.city);

//delete property dalam object

delete john.grade;
console.log(john);

//javascript conditional

//1. if - else
//jika suhu hari ini lebih dari atau sama dengan 37
//tampilkan suhu hari ini panas
//jika tidak tampilkan suhu hari ini dingin

let suhu = 38;
if (suhu >= 37) {
  console.log("Hari ini panas coy");
} else {
  console.log("dingin alamak");
}

//2. if - else if - else
//jika nilai  100 - 80 tampilkan grade A
//jika nilai 70 - 79 tampilkan grade b
//jika nilai 50 - 69 tampilkan grade c
//kika nilai dibawah 50 tampilkan grade d

let nilai = 91;
if (nilai >= 80 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 70 && nilai <= 79) {
  console.log("Grade B");
} else if (nilai >= 50 && nilai <= 69) {
  console.log("Grade C");
} else if (nilai <= 50 && nilai >= 50) {
  console.log("Grade D");
} else {
  console.log("Invalid");
}

//3.Switch Case
//jika angka 1 tampilkan January
// jika angka 2 tampilkan february
// jika angka 3 tampilkan maret
//...
// jika angka 12 tampilkan december

let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("maret");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("mei");
    break;
  case 6:
    console.log("juni");
    break;
}
