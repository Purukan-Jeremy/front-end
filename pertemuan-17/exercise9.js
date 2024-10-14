import {ambilDataUserAsync,ambilDataUserAxios} from "./exe9module.js";
//1
//a.
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!")
        }, 2000)
    })
}
helloWorld()
//b
async function messages() {
    let msg = await helloWorld()
    console.log(msg)
    
}

//c.
messages()

//2.
function ambilDataUser(){ //a
    fetch("https://reqres.in/api/users")//b
    .then((response) => response.json())//c
    .then((users) =>{ //d
        users.data.forEach(({first_name , last_name}) => console.log(first_name, last_name))
    })

        
}
//e
ambilDataUser()

//3
ambilDataUserAsync()

//4

ambilDataUserAxios();