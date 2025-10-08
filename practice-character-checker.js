const input = require('readline-sync');
let userString = input.question('please enter a string:');
let index = input.question('please enter a number to find the character of that number :');
let numberIndex = Number(index);
let character = userString[numberIndex];
console.log("Entered string is :" + userString );
console.log("Entered number for index is :" + index);
console.log(numberIndex);
console.log(character);