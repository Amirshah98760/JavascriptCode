// function displayValue(...a) {
// return a;
// }

// console.log(displayValue(5,10,20,30,40,50));

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const arr3 = [...arr1, ...arr2];


// let fullName = 'amir shah';

// let age = 21;

// let result = `My Name is  ${fullName} 
// and my Age is ${age}  `

// console.log(result);

// const obj = {
//     fName: 'Talha',
//     age : 21,
//     semester :7
// };
// const updated = {...obj, country:'Pakistan'}
// console.log(updated);


// const studentData = [1,2,3,4,5,6];

// const [first, second ] = studentData;

// console.log(first, second)
// const [,, third] = studentData;
// const [,,, fourth] = studentData;
// console.log(third, fourth);

// Object destructuring  

// const stdDetails = {
//     fullName: 'Kifayat',
//     age : 29,
//     contact: 9843274532951,

// greet : function(){
//     console.log(this.name)
// }

// }

// const {fullName , age } = stdDetails;

// console.log(fullName,'\n \n', age);

// Template Literals

// const personName = 'Ali Raza';
// const personAge = 25;

// const info = `My Name is ${personName} and my age is ${personAge}.`;
// console.log(info);

// let x = 10;
// {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);



// const person = { name: "Alice" };   // it give error because of const
// person.name = "Bob";
// person = { name: "Charlie" };


// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 10));

// let add = (a, b) => a + b;
// console.log(add(5, 10));


// const obj = {
//   value: 100,
//   arrowFunc: () => console.log(this.value),
//   normalFunc() { console.log(this.value); }
// };
// obj.arrowFunc();
// obj.normalFunc();

// const name = "John";
// const stdage = 25;

// console.log(`Hello, my name is ${name} and I am ${stdage} years old.`);


// const user = { name: "Alice", age: 22, country: "USA" };
// const { name, age } = user;
// console.log(name); 
// console.log(age);   


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);


// Write a function using the rest parameter that sums all its arguments:

// // Example: sum(1, 2, 3, 4) => 10

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


// Object Destructuring 
const course = {
  courseName: "JavaScript Basics",
  duration: "4 weeks",
  level: "Beginner to Advanced ",
  price: "$199"
};
const { courseName, duration } = course;
console.log(courseName);
console.log(duration);



const desArr = [10, 20, 30, 40, 50];
const [a, b, ...rest] = desArr;
console.log(a);     
console.log(b);     
console.log(rest);