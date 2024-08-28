// //Day 3

// //function
// //normal function

// let Name ="Ponraj"

// function value() {
//     console.log('nor fun');
//     console.log(Name);
    
// }
// value()

// // //anonmyous funtion

// const subtract = function (a,b) {
//     return(a-b)

// };
// console.log(subtract(20,10));

// // arrow function

// const multiply = (a,b) => a * b;


// console.log(multiply(30, 5));

// const multi = (x,y)=> x * y

// console.log(multiply(100,50));

// IIFE function

// (function(){
//     console.log("FSD");
    
// })();

// (function(){
//     console.log("Day 3 of live session");
    
// })();

// let abc=10;

// (function(){
//     let abc=100
//     console.log(abc);
    
// })();
// console.log(abc);

// higher order function-async

// function retfun(x,y){
//     console.log("return statement");
//     return x+y;
// }

// let val=retfun(100,200)
// console.log(val);

// { 
// function retfun(a,b){
//     console.log("sample code");
//     return a*b
// }
//  let example=retfun(100,5)
//  console.log(example);
// }

// function display(name) {

//     return function(msg) {
  
//       console.log(msg + ", " + name);
  
//     };
  
//   }
  
  
//   const retFun= display("Ponraj");
  
//   retFun("Hii"); 

//   function fruit(name) {
//     console.log("fruit");

//     return function(price) {

//         console.log(name +"," + price);
        
//     };

//   };
 
//   const retfun=fruit("Apple");
//   retfun("Rs.100.00 + 12%GST");
  
//callback function

// function processUserInput(callback) {

//     const bikename = "harley davidson";
  
//     callback(bikename);
  
//   }
  
//  processUserInput(function(name) {
  
//     console.log("Welcome to " + name);
  
//   });

//   //
//   function processUserInput(callback){
//     const teamname = "chennai super kings";
//     callback(teamname)
//   }

// processUserInput(function(teamname){

//     console.log("come back to the IPL," + teamname);
    
// });

// let Age =19

// if(Age >=18){
//     console.log("your eligible to participate");
// } else{
//     console.log("your not eligible to participate");
    
// };

// let proprice = 2999;


// if (proprice >= 4500) {

//   console.log(">=4500");

// } else if (proprice >= 3500) {

//   console.log(">=3500");

// } else if (proprice >= 3000) {

//   console.log(">=3000");
// }
//   else if (proprice >= 2500) {

//     console.log(">=2500");
//   }

// else {

//   console.log("below 2000");

// }
  
// let year =2020
// let isleapyear;

// if (year % 4 === 0) {
//     if (year %100 === 0){
//         if (year %400 === 0) {
//             isleapyear = true;
//         } else {
//             isleapyear = false;
//         }
//     } else {
//         isleapyear = true;  
//     }
// } else {
//     isleapyear = false;
// }

// console.log(isleapyear ? "Leap year": "not a leap year");

// let age = 16;

// let canVote = (age >= 18) ? "Yes" : "No";


// console.log("Can vote: " + canVote);

// let day = "tuesday";


// switch (day) {
//     case "Monday":

//     console.log("Start of the work week.");

//     break;

//   case "Friday":

//     console.log("End of the work week.");

//     break;

//   case "Saturday":

//   case "Sunday":

//     console.log("Weekend!");

//     break;

//   default:

//     console.log("Midweek day.");

// }

// let count = 0;


// while (count < 2) {

//   console.log("Count is: " + count);

//   count++;

// }

// let xcount = 0;

// while (count <10) {

//   console.log("count is:" + count);
  
//   count++;

// }

// let count = 0;

// do {

//   console.log("count is:" + count);
  
//   count++;

// } while (count <5);

// let value = 3

// do {

//   console.log("value is: " + value);

//   value++;

// } while (value < 10)


// for (let i = 0; i < 5; i++) {

//   console.log("product:" + i);

// }

// const person = {

//   name: "ponraj",

//   age: 26,

//   city: "Bangalore"

// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
  
// };

// const numbers = [1,2,3,4,5] ;
// for (let num of numbers) {
//   console.log('numbers: '+ num);
  
// }

// for (let cars = 1; cars <4 ; cars++){
    
// for (let bikes =1; bikes <2 ; bikes++){

// console.log("cars = " + cars +",bikes = " +bikes );

// }

// }

