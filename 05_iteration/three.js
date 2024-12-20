// high order loops

// ["", "", ""]  => str in array 
// [{}, {}, {}]   => objects in arrays.

/*
const arr = [1, 2, 3, 4, 5]
// for of loop
for (const num of arr) {
    console.log(num);
}
    // array
*/
/*
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
*/

// Maps  => collection of key value pair.

/*
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "Russia")
map.set('IN', "India")  // Dulpicates are not allowed


// console.log(map);
//   for of loop on map 
for (const [key, value] of map) {          // agur key and value ko alug alug chiye then use this syntax
    console.log(key, ':-', value);
}
*/

// objects can not be iterated by for of loop
/* 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {  //objects are not iterable by for of loop
     console.log(key, ':-', value);
}
*/