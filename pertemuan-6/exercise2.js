//1.iife
console.log("1.IIFE");
let output1 = (function (berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  console.log("berat =", berat + " kg");
  console.log("tinggi=", tinggi / 100, "m");
  return "body max index anda = " + bmi.toFixed(5);
})(60, 170);
console.log(output1);
//2.callback
console.log("2.CallBack");

function saybmi(hitungbmi) {
  let result = hitungbmi(76, 180);
  return result;
}
let hasil = saybmi(function (berat2, tinggi2) {
  console.log("berat =", berat2 + " kg");
  console.log("tinggi=", tinggi2 / 100, "m");
  let bmi2 = berat2 / (tinggi2 * tinggi2);
  return "body max index anda = " + bmi2.toFixed(5);
});
console.log(hasil);
