asynchronous js
synchronous --> single thread -> blocking
console.log("proces 1");
console.log("proces 2");
console.log("proces 3");
console.log("proces 4");

//asynchronous --> multi thread
//1.pararel
setTimeout(() => {
  console.log("process 1");
}, 3000);
console.log("process 2");

setTimeout(() => {
  console.log("process 3");
}, 5000);

//2.concurent
setTimeout(() => {
  console.log("world");
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("everyone");
    }, 3000);
  }, 4000);
}, 3000);

//promises
let contiditon = true;
const newPromise = new Promise((resolve, reject) => {
  if (contiditon) {
    resolve("berhasil");
  } else {
    reject("gagal");
  }
});

//cara pakai promise
//1. then - catch
newPromise
  .then((result) => result)
  .then((result2) => console.log(result2))
  .catch((error) => console.log(error));

  //2.async - await
  //harus dibuat dalam function

  const counsumePromise = async () => {
    try {
        let result = await newPromise;
        console.log(result)
    } catch (error) {
        console.log(error)
    }
  }

// pakai promise yang sudah disediakan
console.log("=======================");
//1. fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  console.log(json);
  json.forEach(({ name }) => console.log(name));
};


