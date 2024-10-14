//javascript function
//cara 1. function declaration
// function greetings1() {
//     console.log("Hello World");
// }

// greetings1(); // call / execute funtion
// //cara 2. funtion expression
// let greetings2 = function () {
//     console.log("Hello Mas");
// }

// greetings2()

//parameter & argument (input), return (output)
// cara 1
function greetings1(fullName){
    return "hello " + fullName;

}
//                       argument
let output = greetings1("John Doe");
console.log(output)

//cara 2
let greetings2 = function (fullName){
    return "hello " + fullName;
}

let output2 = greetings2("jonny")
console.log(output2)


//global scope & local scope

let x = 10 //global scope

function foo() {
    let y = 20 //local scope
    console.log(x);
    console.log(y);
    if (y > 10) {
        let z = 20
        console.log(z)
    }

}
console.log(x)

