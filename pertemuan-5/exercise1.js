function alamak(berat, tinggi) {
    let bmi =  berat / (tinggi * tinggi)
    console.log("berat =",berat + " kg")
    console.log("tinggi=", tinggi / 100 ,"m");
    return "body max index anda = " + bmi.toFixed(5)
}
let berat = prompt("Masukan berat badan anda : ")
let tinggi = prompt("Masukan tinggi badan anda : ")
let output = alamak(berat, tinggi)
console.log(output);