
//old way to use
const name = "prashant"
const repoCount = 2

// console.log(name + repoCount + " Value");

// new way to use:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('prahant-tiwari-com')

// console.log(gameName[3]);
// console.log(gameName.__proto__);

//STRING METHOD :
console.log(gameName.length);
console.log(gameName.toUpperCase());
// IT IS BASICALLY USE TO RETURN CHARACETER AT THAT PARTICULAR INDEX
console.log(gameName.at(-3));
console.log(gameName.charAt(2)); 
// AT AND CHARAT BOTH ARE SAME BUT IF AT WE USE NEGATIVE VALUE ALSO BUT NOT IN CHARAT    
// index of reverse of charat it basically give you index
console.log(gameName.indexOf('t'));


// substring
const newString = gameName.substring(0, 4)
console.log(newString);

// // Split(seprater, limit)
// Divides a string into substrings and returns them as an array. It takes two optional parameters: separator and limit. Separator defines how to split the string, such as by a character or comma. Limit limits the number of splits with a given number. 
// Slice()
// Copies a part of an array and returns it as a new array, without changing the original array. It returns a string if used on a string, or an array if used on an array.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

console.log(gameName.split('-'));


// trim()

const newStringOne = "   prashant    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/prashant%20tiwari"

console.log(url.replace('%20', '-'))

//  it basically check sundar is there in your url or not it return true false

console.log(url.includes('sundar'))