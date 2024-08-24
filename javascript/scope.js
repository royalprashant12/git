// let  const  var( anywway acess)
function one(){
    const username = "prashant"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); you cant acess website to global scope
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++ very very important


console.log(addone(5))

function addone(num){
    return num + 1
}

//  if u define variable and use function then it wont work

addTwo(5)
const addTwo = function(num){
    return num + 2
}