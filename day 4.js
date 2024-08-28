//hoisting

// display()

// function display(){

//     console.log("hello,team !");
    
// }

//scope

//global scope

// var vacation ="i am going for international trip"

// function example(){
//     var trip ="i am going for india trip"
//        console.log(vacation);
//        console.log(trip);
       
// }

// example()

// console.log(trip);

//block scope

// if (true){
//     let login = "Enjoy your day"

//     console.log(login);
    
// }

//     console.log(login);
    
//Arrays method

let students = ["Santhosh" , "Karthick" , "Dhanush"];

    console.log(students[0]);
    console.log(students.length);
    
//common Arrays
// //push(),pop(),unshift,shift,slice,splice,

students.push("sanjay");
console.log(students);

students.pop();
console.log(students);

students.unshift("sanjay");
console.log(students);

students.shift();
console.log(students);

let slicedstudents = students.slice(2,3);
console.log(slicedstudents);

students.splice(0,1);
console.log(students);


let arr1 =[1,2,3,4,5]
arr1.splice(1,0,100)
console.log(arr1);

arr1.splice(2,1,7)
console.log(arr1);

let looping=[100,200,300,400,500]

looping.forEach((item, index)=>{
    console.log(item,);
    console.log(index);
    console.log(`${index}= ${item}`);
    
})


const mapretarr=looping.map((item, index)=>{

    console.log(item);
    console.log(index);
    return item*2
    
})
console.log(mapretarr);


const Rarr = looping.map(i=>i*2)

console.log(Rarr);



