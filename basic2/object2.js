/*
// const user=new object()   //singleton object
const user2={} // not a single object
user2.id="weq123",
user2.city="kanpur"
// console.log(user2);


// object inside object (nested object)
const regularuser={
    email:"abc@gmail.com",
    fullname:{
         userfullname:{
            firstname:"Aryan",
            lastname:"Gupta"
         }
    }
} 
console.log(regularuser.fullname.userfullname.firstname);
*/


/*
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// combine the object
console.log(obj1,obj2);  // wrong way 
const obj3=Object.assign(obj1,obj2)   //  method1
console.log(obj3);

const obj4={...obj1,...obj2}   // best way using spread operator
console.log(obj4);
*/

/*
// how value can be use from database
const user3=[
    {
        id:1,
        email:"xyz@gmail.com"
    },
    {
        id:2,
        email:"abc@gmail.com"
    },
    {
    id:3,
    email:"pqr@gmail.com"
    }
]

console.log(user3[1].email);


console.log(Object.keys(user3[0])); // we can access any object keys by using this method  and we get output in the form of array so that we can also use loops to itrate them
console.log(Object.values(user3[0])); // we can access any object values by using this method  and we get output in the form of array so that we can also use loops to itrate them
console.log(Object.entries(user3));
*/


// DESTRUCTOR OF AN OBJECT
const course={
    price:399,
    courseinstructor:"aryan",
    startingdate:"25/11/2024"
}

const {courseinstructor}=course
console.log(courseinstructor);   // we dont have to write console.log(course.courseinstructor)again and again 

const {courseinstructor:ins}=course // we can customise the name as well
console.log(ins);


  




