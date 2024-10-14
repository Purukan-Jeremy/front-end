let purukan = {
  firstName: "Jeremy",
  b: 50,
  m: 1.7,
};
function hitungBMI(x) {
  let bmi = x.b / (x.m * x.m);
  console.log("BMI:", bmi.toFixed(2));

  if (bmi < 16.0) {
    console.log("Severely Underweight");
  } else if (bmi >= 16.0 && bmi <= 18.4) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log("Overweight");
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    console.log("Moderately Obese");
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    console.log("Severely Obese");
  } else if (bmi >= 40.0) {
    console.log("Morbidly Obese");
  }
}
hitungBMI(purukan);
