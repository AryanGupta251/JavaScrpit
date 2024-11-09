const mysym=Symbol("key1")

// object literals


const user={
    [mysym]:"using symbol as key",
    name:"Aryan",
    "full name":"Aryan Gupta",
    age:20,
    city:"budaun",
    state:"uttar pradesh",
    email:"aryangupta@gmail.com"
    }


/*
// now how to access obj (normal method) 
console.log(user.email);
// good way to access the obj
console.log(user["full name"]);
console.log(user[mysym]);


// overwrite a value
user.email="guptaaryan@gmail.com"
console.log(user.email);

Object.freeze(user) // no changes can occur from now
user.name="harsh" // name will not change 
// console.log(user.name); 

*/
user.greeting=function(){
    console.log("hello from aryan");
}

user.greetingtwo=function(){
    console.log(`hello from ${this["full name"]}`);
}


console.log(user.greeting);
console.log(user.greeting());
console.log(user.greetingtwo());








 