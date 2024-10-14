//iife & callback function
//1.iife (immediately invoked function expression)
(function(){
    console.log("Hello World");
})();
//with parameter, args & return value
let output = (function(fullName){
    return "Hello " + fullName
})("Jeremy")

console.log(output);

//2.Callback Function
//a. no args no args & return value
function sayHello(callback){
    callback()
}

sayHello(function (){
    console.log("hello lil bro");
})
//b.with parameter,args,return value

function sayHey(call){
   let result = call("Purukan")
   return result;
}

let hasil = sayHey(function (Name){
    return "Hello " + Name;
})
console.log(hasil);