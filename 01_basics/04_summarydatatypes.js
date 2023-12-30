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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive DatatYPES), heap(Non-Primitive DataTypes)

let myYoutubename = "arshadalicoding.in"

let anothername = myYoutubename
anothername = "suttaaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "arshad@google.com"

let userThree = userTwo
userThree.email = "shab@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
 console.log(userThree.email);