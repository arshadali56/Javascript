//*************Primitive Datatypes */
// 7 types : String, Number, Boolean , null , undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol(1234)
const  anotherId = Symbol('1234')

//console.log(id === anotherId);

const bigNumber = 1234567890345677755512n

// Refrence (Non Primitive)

//Arrays, Objects,Functions

const heros = ["Aru", "AerrS", "SAlman"];
let myObj = {
    name: "arsh",
    age: 23
}

const myFunction = function(){
   console.log("Hello Arsh");
}

console.log(typeof anotherId);



