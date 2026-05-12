// Function declaration
// function without parameter  
function stdgreet(){
    console.log('Hello Kifayat');
}

stdgreet();

// function with parameter 
function greet(fullName){
    console.log("Hello "+ fullName);
}

greet('Hello Rohan');

// function add numbers 
function sum(a,b,c){
    console.log(a+b+c);
}
sum(20,10,30);

//Function Expression

const greetstd = function(name){
    return 'Hello '+ name;
}

let result = greetstd( 'Amir shah');
console.log(result);


// Arrow function 
// Example add two number 
const addNumber = (a,b) =>{
    return  a + b;
}

const results = addNumber(10,20);
console.log(results);

// find odd even using function
function findOddEven(num){
    if (num %2 === 0) {
        console.log(num, 'Even');
    }else{
        console.log(num, 'Odd');
    }
}

findOddEven(10);

// Anonymous function 
setTimeout(() => {
    console.log('Hello amir')
}, 2000);


// // Class task 1 

// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   if (b === 0) {
//     return "Error: Cannot divide by zero!";
//   }
//   return a / b;
// }

// let num1 = Number(prompt("Enter the value of num1"));
// let num2 = Number(prompt("Enter the value of num2"));
// let operation = prompt("Enter the operation (add, sub, mul, div):");

// let result = "";

// if (operation === "add") {
//   result = sum(num1, num2);
// } else if (operation === "sub") {
//   result = sub(num1, num2);
// } else if (operation === "mul") {
//   result = mul(num1, num2);
// } else if (operation === "div") {
//   result = div(num1, num2);
// } else {
//   result = "Invalid operation!";
// }

// console.log("Result =", result);


// // Task 2 create a function that calculate the student grade 
// // 1. Function to calculate grade

// function calculateGrade(marks) {
//   if (marks >= 90 && marks <= 100) {
//     return "A";
//   } else if (marks >= 80 && marks <= 89) {
//     return "B";
//   } else if (marks >= 70 && marks <= 79) {
//     return "C";
//   } else if (marks >= 0 && marks < 70) {
//     return "D / Fail";
//   } else {
//     return "Invalid marks entered!";
//   }
// }


// let marks = Number(prompt("Enter your marks (0 - 100):"));
// let grade = calculateGrade(marks);


// console.log("Your Marks:", marks);
// console.log("Your Grade is:", grade);



// // Create a function that takes a string and returns it in uppercase.

// function str(a){
//     return a.toUpperCase();
// }

// let showOutput = str('amir');
// console.log(showOutput)