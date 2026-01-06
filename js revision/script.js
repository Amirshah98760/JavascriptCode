
var message = "Hello World";
// console.log(message);

let message2 = "Hello Again";
console.log(message2);

const message3 = "Hello for the Last Time";
console.log(message3);


message = "Changed Message";
console.log(message);

message2 = "Changed Again";  // Re-assigning a new value to message2
console.log(message2);

// message3 = "Trying to Change Constant"; // This will throw an error because constants cannot be reassigned and not re-declared
// console.log(message3);


function square (num){
    console.log(`The square of ${num} is: `, num);
    return num * num;
}
square(10);

function add (a, ...b){
    return a + b;
}
console.log(add(5, 7));
console.log(add(5, 7, 10, 15));

const obj = {
    name : 'john',
    age : 30,
    rollNo : 101,
    city:'Peshawar'

}

console.log(obj.name);
console.log(obj.age);
console.log(obj.rollNo);
console.log(obj.city);

// for (let key in obj){
//     console.log(`${key} : ${obj[key]}`);    
// }

for (let key in obj){
    console.log(`${key} : ${obj[key]}`)
}

// Create an array of 5 fruits and log the 3rd fruit.

const arr = [1,2,3,4,5,6,7];

console.log(arr[2])

for(let i =0; i< arr.length; i++){
    console.log(arr[i]);
}


const mul = (a,b)=>{
    return a * b;
}

console.log(mul(2,5));


// type of operator works 

console.log(typeof arr);

const myName = null;
console.log(typeof myName);

let test;
console.log(typeof test);


// Write a program that checks if a number is even or odd.

function checkEvenOdd(num){
    if(num % 2 === 0){
        console.log(`${num} is Even`);
    } else {
        console.log(`${num} is Odd`);
    }   
}

checkEvenOdd(10);
checkEvenOdd(7);


// Write a program that reverses a string ("hello" → "olleh").

function reverseString(str){
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));

// Write a program that finds the largest number in an array.

// function findLargest(arr){
//     let largest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest([3, 5, 7, 2, 8]));

// Write a function that takes an array of numbers and returns only even numbers.
function getEvenNumbers(arr){
    let evenNumbers = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

console.log(getEvenNumbers([1,2 ,4, 6, 3 , 7, 8])); // why give error here?



const arr2 = [10, 20, 30, 40, 50];

const [first, second, ...rest] = arr2;

console.log(first);
console.log(second);
console.log(rest);



// Write a Promise that resolves after 2 seconds and logs “Done”.

// Convert the Promise above to use async/await.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
    console.log("Done");
});

// Convert the Promise above to use async/await.

async function asyncDelay() {
    await delay(2000);
    console.log("Done");
}
asyncDelay();


