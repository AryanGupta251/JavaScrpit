console.log(Math);   
console.log(Math.abs(-4));    // positive value
console.log(Math.round(4.6));  //roundoff
console.log(Math.ceil(4.2));    //greater value
console.log(Math.floor(4.5));    //lower value
console.log(Math.min(4,3,5,7,1,9));   //minimum value
console.log(Math.max(4,3,5,7,1,9));   //maximum  value
console.log(Math.random());          // generate random value between zero and one 
console.log((Math.random()*10)+1);    // generate random value greater then 0
console.log(Math.floor(Math.random()*10)+1); //  generate random value greater then 0 with only one digit


const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min +1))+min);   //   generate random value greater then 10 with only one digit

