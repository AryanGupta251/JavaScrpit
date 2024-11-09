// basic function 
/*
function fun(){
    console.log("A");
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n"); 
}
// fun();
*/

/*
function add(num1,num2,num3){
    console.log(num1+num2+num3);    
}
// add(1,2,3)
*/
/*
function add(num1,num2,num3){
    let result=num1+num2+num3
    return result
    // console.log(num1+num2+num3);    
}

let result =add(1,2,3)
console.log("result : ",result);
*/
/*
function user(username){
  return `${username} just loged in`
}

console.log(user("Aryan"));
console.log(user(""));
console.log(user());
*/


/*
function calculatecartprice(val1,val2,...num1){  // using rest operator
return num1
}
console.log(calculatecartprice(100,200,300,400,500));
*/

/*
//how to use objects in a function  
const obj={
    username:"Aryan",
    price:100,
}

function handleobj(anyobject){
   console.log(`username is ${anyobject.username} and the value of price is ${anyobject.price}`);  
}
// handleobj(obj) 
handleobj({
    username:"Harsh",
    price:10
})

*/

// using array
const mynewarray=[100,200,300,400,500]
function returnvalue(getArray){
    return getArray[1]
}
// console.log(returnvalue(mynewarray));
console.log(returnvalue([233,432,3545,343,442,443]));

