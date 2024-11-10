//var c = 300
let a = 300 //Global scope (its value can be used inside the scope as well)
if (true) {
    let a = 10   //block scope (its value can not be used outside the scope )
    const b = 20
    // var c=30   // we do not use VAR because it dont work in scope and create a messy and confusing code 
    // console.log("INNER: ", a);  // output =>10
    
}

// console.log(a); //output =>300
// console.log(b); //error
// console.log(c); //error


// nested scope
function one(){
    const username = "Aryan"  //global scope for function two()

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //error

     two()

}
// one()


if (true) {
    const username = "Aryan"
    if (username === "Aryan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  //error
}

// console.log(username); //error


// ++++++++++++++++++ Interesting Example ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)   // Cannot access 'addTwo' before initialization because it is stored in a variable 


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
 
    