//Day 3

//function
//normal function

// let Name ="Ponraj"

// function value() {
//     console.log('nor fun');
//     console.log(Name);
    
// }
// value()

// anonmyous funtion

// const subtract = function (a,b) {
//     return(a-b)

// };
// console.log(subtract(20,10));

//arrow function

// const multiply = (a,b) => a * b;


// console.log(multiply(30, 5));

// const multi = (x,y)=> x * y

// console.log(multiply(100,50));

//IIFE function

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

//higher order function-async

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
  

//call back function

// function processUserInput(callback) {

//     const bikename = "harley davidson";
  
//     callback(bikename);
  
//   }
  
  
//   processUserInput(function(name) {
  
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

// let score = 44;


// if (score >= 90) {

//   console.log("Grade: A");

// } else if (score >= 80) {

//   console.log("Grade: B");

// } else if (score >= 70) {

//   console.log("Grade: C");
// }
//   else if (score >= 45) {

//     console.log("Grade: P");
//   }

// else {

//   console.log("Grade: F");

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
