/*
const user = {
    username: "Aryan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);
*/


/*
function chai(){
    let username = "Aryan"
    console.log(this.username);  // we can not use 'this' keywords in functions we can only use it in objects  
}

chai()
*/
/*
const chai = function () {
    let username = "Aryan"
    console.log(this.username);  // undefined
}
*/

/*
const chai =  () => {  // arrow function
    let username = "Aryan"
    console.log(this.username);  // undefined
}

chai()
*/


// () => {}  //syntax of arrow function

/*const addTwo = (num1, num2) => {
    return num1 + num2      // explicit return
}
*/

// const addTwo = (num1, num2) =>  num1 + num2   // Implicit return  (when we dont use return keyword )

// const addTwo = (num1, num2) => ( num1 + num2 )  // agur curly braces use krenge toh 'return' keyword use krna pdega agur parenthesis use krenge tb nhi krna pdega (it will help is react)

// const addTwo = (num1, num2) => ({username: "Aryan"})

console.log(addTwo(3, 4))

