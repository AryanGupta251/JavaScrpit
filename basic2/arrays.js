let arr =[1,2,3,4,"aryan","mango"]  //declear a array
let myarr=new Array(1,2,3,4)   //declear a array
// console.log(myarr[3]);

//array methods
myarr.push(6)
myarr.push(7)
myarr.pop()  // remove last element
myarr.unshift(8)  // add element at first index
myarr.shift()   //remove fisrt element 
// console.log(myarr);


// console.log(myarr.includes(3));  // check whether the given number present in an array or not(return boolean values)
// console.log(myarr.indexOf(9));
let newarr = myarr.join();  // join function convert the array into string type
// console.log(newarr);  
// console.log(typeof newarr);  // converted into string 


// slice,splice

const myar1=[0,1,2,3,4]
// console.log("original array :",myar1);

// console.log(myar1.slice(1,3));
// console.log("After Slice : ",myar1);   // we do not print the last index in slice nd array remains the same

// console.log(myar1.splice(1,3));
// console.log("After Splice : ",myar1);  // we include the last index for print in splice and splice section is removed from the origin array after the splice operation


//part2
const marvel_heroes=["thor","ironman","hulk"]
const dc_heroes=["superman","batman","flash"]
// marvel_heroes.push(dc_heroes)   // array in array 
// console.log(marvel_heroes);  
// console.log(marvel_heroes[3][2]);   //flash

//concatination    // add elements of two array and make a new array of all elements 
 let avengers = marvel_heroes.concat(dc_heroes)
// console.log(avengers);

//spread     => same work as concatination
const all_heros=[...marvel_heroes,...dc_heroes]
// console.log(all_heros);

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=another_arr.flat(Infinity)
// console.log(real_arr);


console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));
console.log(Array.isArray({name:"aryan"}));  //intresting











 







