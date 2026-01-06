// setTimeout(() => {
//     console.log('Hello Talha')
// }, 4000);


// function fullName() {
//     console.log('hello talha')
// }

// fullName();

// setInterval(() => {
//     console.log('Hello Amir ')
// }, 2000);


// let timeoutId = setTimeout(function() {
//   console.log("This will not run");
// }, 3000);

// // // Cancel before it runs
// clearTimeout(timeoutId);


let count = 0;

let setIntervalId =  setInterval(() => {
    count++;
    console.log('count', count);

    if (count === 10) {
        clearInterval(setIntervalId)
    }


}, 2000);



