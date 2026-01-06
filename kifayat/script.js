// const greeting = "Hello, World!";
// let count = 0;
// var isActive = true;  //don't use it 

// let heading1 = document.getElementById('heading1');
// heading1.style.color = 'red';

// let btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{
//     alert("you clicked the button ")
// })


const stdArray = ['John', 'Doe', 'Jane', 'Smith'];

stdArray.push("amir shah");
// Print the elements of the array using for loop
for (let index = 0; index < stdArray.length; index++) {
        const element = stdArray[index];
        console.log(element)
    
    }
    stdArray.shift();
    
    // Print the elements of the array using for of loop
for (const student of stdArray) {
    console.log(student)
}

// Print the elements of the array using for each loop 

stdArray.forEach(element => {
    console.log(element)
});


