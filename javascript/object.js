// 1.// object: object define by two types 1 literal(not make sigelton :one type of object) and second constructor
// singleton
// Object.create (literals)
// const tinderUser = new Object()



// 2
// object literals
const mysym = Symbol("key1")

const animal = {
    sound : "barking",
    "age": "19",
    [mysym]:"ritesh",
    // in object you define any type of variable
}
// in array[o] only one way to possible and here you acess many ways;

console.log(animal.sound);
console.log(animal["age"]);
console.log(animal[mysym])
console.log(animal);
animal.sound="muu";
console.log(animal.sound);

// 3.

// Object.freeze(animal)
// // freeze basically freez the value
// animal.sound="miauu";

// 4.

// ?we can use object variable in function also
animal.greeting = function(){
    console.log("Hello JS user");
}
animal.greetingTwo = function(){
    console.log(`Hello JS user, ${this.sound}`);
}

// 5.

console.log(animal.greeting());
console.log(animal.greetingTwo());
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//  three way to acess the object data

// 6

// object using array
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// 7.

//  object using multiple object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



// 8. object destructure 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }