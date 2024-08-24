
// 1.
const user = {
    username: "prashant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this.username);
    }

}

// user.welcomeMessage()


function anyobject(anyobject) {
    console.log(`${anyobject.username} , welcome to website`);
 
}

// anyobject({username:"PRASHANT"});

// 2.
// console.log(this);


// 3. this method you cannot define inside function  the both underdefined because they search in golbal scope(windows) and arrrow think as lexical scope( local scope)
//  Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) scope where the arrow function is defined.
function chai(){
    let username = "prashant"
    console.log(this.username);
}

chai()

const chai1 = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai1();
const chai3 =  () => {
    let username = "hitesh"
    console.log(this);
}


chai3()

// 4. arrow function different way to define

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

//5. Immediately Invoked Function Expressions (IIFE):
// why we need because golbal scope pollution and imidatly excute


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')