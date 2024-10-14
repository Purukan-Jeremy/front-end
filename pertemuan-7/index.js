//Array in Javascript
//deklarasi Array

// Array Literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let numbers2 = new Array(6, 7, 8, 8, 10);
console.log(numbers2);

let students = ["John", "Jane", "bob"];
let john = ["john", 40, true, [80, 90, 100]];
console.log(john);

//array length
console.log(numbers.length);

// cara mengakses element/data tertentu dalam array
// melalui index array, index selalu dimulai dari 0
console.log(numbers[2]);
console.log(john[2]);
console.log(john[3][1]);

//mengakses elemen/data terakhir dalam array
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers3[9]);
console.log(numbers3[numbers3[length - 1]]);

//array length
let array = [1, 2, 3, "Hello", false, true];
//to string
console.log(array.toString());
//to join
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));
//pop
array.pop();
console.log(array);
array.push("selamat pagi");
console.log(array);
//5. shift ()
array.shift();
console.log(array);
//6.unshift()
array.unshift("selamat malam");
console.log(array);
//7.splice()
array.splice(2, 1); // hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);
//8.concat
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang hitam", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);
