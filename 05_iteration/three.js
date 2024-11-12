// for of

// ["", "", ""]  => str in array 
// [{}, {}, {}]   => objects in arrays

/*
const arr = [1, 2, 3, 4, 5]
// for of loop
for (const num of arr) {
    console.log(num);
}
*/
/*
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
*/

// Maps  => collection of key value pairs

/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // Dulpicates are not allowed


// console.log(map);
//   for of loop on map 
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
*/

// objects can not be iterated by for of loop
/* 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
}
*/