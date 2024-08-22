const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]



const myArr2 = new Array(1, 2, 3, 4)
// you can declear array in multiple way if you declear as object you get method
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
//  push and pos for inserting at last  unshift and shift insert at first


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// convert into string


// slice, splice
// const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// print 1 to 2 number ignore last

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
// it print 1 to 3 but change in actual array also
console.log("C ", myArr);
console.log(myn2);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros) 

// // it return  basically  return [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const allHeros = marvel_heros.concat(dc_heros)
const all_new_heros = [...marvel_heros, ...dc_heros]
// it return  basically  return [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(Array.isArray("Hitesh")) 
// it return true false

// console.log(Array.from("Hitesh"))
// // basically it convert to array [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

