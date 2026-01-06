// let a = 20;
// let b = 10;

// if (a>b) {
//    document.writeln("a is greater than b"); 
// }
// else{
//     document.writeln("b is greater than a");
// }

// (a>b) ?document.writeln('a is greater than b '): document.writeln('b is greater than a'); 

// let age = 17;

// if (age % 2 === 0) {
//     console.log('even')
// }
// else {
//     console.log('odd')
// }

// Check Divisibility
// Check if a number is divisible by both 3 and 5.

// let number = 42; 

// if (number % 3 === 0 && number %5 === 0) {
//     console.log('divisible by  3 and 5')
// }
// else{
//     console.log('not divisible by 3 and 5')
// }

// Day of the Week
// Take a number (1–7) and print the day of the week (1 = Monday, 7 = Sunday). usinng if else 

let day = 7;

if (day === 1) {
    console.log('monday')
}else if (day === 2){
    console.log('tuesday')
}else if(day === 3){
    console.log('wednesday')
}else if(day === 4){
    console.log('thursday')
}else if(day === 5){
    console.log('friday')
}else if(day === 6){
    console.log('saturday')
}else if(day === 7){
    console.log('sunday')
}else{
    console.log('Your number is wrong please give the number between 1 to 7');
}



let temp = 10;

if (temp > 35) {    
    console.log("It's too hot 🥵");
} else if (temp >= 25 && temp <= 35) {
    console.log("Normal weather ☀️");
} else if (temp >= 15 && temp <= 24) {
    console.log("Cool day 🌤️");
} else {
    console.log("Cold weather 🧊");
}


let userName = 'admin';
let pass = 'admin1233';

if (userName === 'admin' && pass === 'admin123') {
    console.log('Login successful!');
} else if(userName !== 'admin'){
    console.log('Invalid UserName!');
}
else{

    console.log('invalid password')
}


let isPresent = false;

(isPresent === true) ? console.log('talha is present'):console.log('talha is not present')
