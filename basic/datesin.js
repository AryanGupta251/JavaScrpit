let mydate= new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());  // exject date
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString()); // month/date/year
// console.log(mydate.toLocaleString());  // month/date/year   time
// console.log(mydate.toUTCString());
// console.log(mydate.toTimeString());
// console.log(mydate.toJSON());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof (mydate));  // object


// different dates formate
// let mycurrentdate = new Date(2024,9,12)     //year ,month,date
// let mycurrentdate = new Date(2024,9,12,5,3)   //year ,month,date ,time
// let mycurrentdate = new Date("2023-12-09") 
let mycurrentdate = new Date("01-10-2024") 
// console.log(mycurrentdate.toLocaleString());
// console.log(mycurrentdate.getTime()); //time in mili seconds
// console.log(Math.floor(mycurrentdate.getTime()/1000)); //time in  seconds
// console.log(mycurrentdate.getMonth());
mycurrentdate.toLocaleString('default',{
    calendar:"calendar"
})
