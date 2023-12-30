const name = "Arshad "
const repoCount = 12

// console.log(name + repoCount + "Value");

console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

const gamename = new String('Arsh-Ali-com')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-8, 4) //neg value pass 
console.log(anotherString);

const newStringOne = "  Arsh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://arshad.com/arshad%20ali"
// console.log(url.replace('%20', '_'))
console.log(url.includes('_ali', 'tech'))

console.log(gamename.split('_'));