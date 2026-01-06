// Declare a variable num1 = 10 and num2 = 20. Print their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 20;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

// Create a constant PI = 3.14159. Calculate and print the area of a circle with radius = 5.
const PI = 3.14159;
let A = PI + (5*5);

console.log(A);
// Swap two variable values without using a third variable.

// Check if a number is even or odd.

let a = 10;

if (a%2 === 0) {
    console.log('even');
}
else{
    console.log('Odd')
}

// <------------------------------------>

// Take a user’s age (hardcode or use prompt) and print:

// "Child" if age < 13 // "Teenager" if 13–19 // "Adult" if 20–59 // "Senior" if 60+
let age = 60;

if (age < 13) {
    console.log('child');
}else if(age >= 13 && age <= 19){
    console.log('Teenager')
}else if(age >=20 && age <=59){
    console.log('adult')
}else {
    console.log('senior')
}
// Write a program that takes three numbers and prints the largest one.
// hard coded value 
let val1 = 40;
let val2 = 20;
let val3 = 30;

let largest;
if (val1 >= val2 && val1 >= val3) {
    largest = val1;
}
else if(val2 >= val1 && val2 >= val3){
    largest = val2;
}else {
    largest = val3;
}

console.log('The largest value is ', largest);

// Take values using prompt 
// let a1 = Number(prompt("Enter value 1"));
// let a2 = Number(prompt("Enter value 2"));
// let a3 = Number(prompt("Enter value 3"));

// let larg;
// if (a1>= a2 && a1 >= a3) {
//     larg = a1;
// }else if (a2 >= a1 && a2 >= a3) {
//     larg = a2;
// }else {
//     larg = a3;
// }

// console.log('The largest value is ', larg);

// Check if a year (e.g., 2024) is a leap year.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Use a ternary operator to check if a number is positive or negative.

// let number = -5;
// let result = number >=0 ? console.log('Positive') : console.log('Negative');
// console.log(result);

// Print the multiplication table of a given number (e.g., 5).
// let table = Number(prompt('Enter table which do you want to print?'));

// for (let i = 1; i<=10; i++) {
   
//     console.log(table + ' x ' + i + ' = ' + table * i)
// }



// sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 101; i++) {
    sum += i;
}

console.log('The sum of 1 to 100 is ', sum);


// for (let i = 0; i <=5; i++) {
//     let str = '';
//    for(let j = 1; j<=i; j++){
//     str += '* ';
//     console.log(str);
//    }
// }


// for (let i = 1; i <= 5; i++) {          
//   let pattern = "";                     
//   for (let j = 1; j <= i; j++) {        
//     pattern += "*";                     
//   }
//   console.log(pattern);                 
// }


// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [5, 15, 25, 35, 45];

// let mergedArray = arr1.concat(arr2);
// console.log(mergedArray);

// let arrjoin = arr1.join('-');
// console.log(arrjoin);


// let stdArr = ['amirshah', 'pmls', 'sabbir', 'rakib', 'shanto'];

// for (const element of stdArr) {
//     console.log(element)
// }

// Write a program that removes duplicate elements from an array.
let numbers = [1, 2, 2, 3, 4, 4, 5,6,6];

let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

