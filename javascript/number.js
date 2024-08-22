const balance = new Number(100)
// if you use this object you get all method in inspect console
console.log(balance.toString().length);
// if we convert to string we used all string methods 

console.log(balance.toFixed(2));
// it basically use to seen how much decimal number you required

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));
// it basically used to round off the value


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));




// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// use in inspect console to know about this method
console.log(Math.abs(-4));
console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)