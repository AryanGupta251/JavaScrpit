"use strict";  // treat all js code as new version
// alert(3+3)  // we are using nodejs , not browser


/*
// premitive datatype
number
bigint
string
boolean
null=> standalone value 
undefined
symbol=>unique

*/


// console.log(42 / +0); // Infinity 
// console.log(42 / -0); // -Infinity


let name="Aryan"  //String
let num=3333     // number
let bool=true     //boolean
let yes=null      //standalone value 
let big =383828303973n //big int
let useremail;   //undefined 
console.table([name,num,bool,yes,big,useremail]);
console.log(name[2]);      // we can access any element stored in any index of string using its index


let con1=Symbol("123")
let con2=Symbol("123")
console.log(con1==con2);



// reference (non primitive)
// Array , objects, Functions

const heros =["shatiman","thor","naagraj"]  //array
{
    name:"aryan"
    age:23                    //these are objects it is made under curly braces and written in key pair values
    roll:12
    branch:"computer engineering"
}

const myfun=function(){           // functions
    console.log("Hello World!");
    
}



// 