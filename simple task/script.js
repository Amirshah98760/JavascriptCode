let textInput = document.getElementById("textInput");
let demo = document.getElementById("demo");

// textInput.addEventListener("input", function() {
//     demo.innerHTML = textInput.value;
// });


textInput.addEventListener("input", function() {
    demo.innerText = textInput.value;
    console.log(demo)
    let data = document.getElementById("charCount");
    let charCount = data.innerHTML = textInput.value.length;
    // let charCount = textInput.value.length;
    
});

// textInput.addEventListener("input", function() {
//     demo.innerText = textInput.value; // Show typed text in demo
//     let data = document.getElementById("charCount");
//     let charCount = textInput.value.length; // Count characters
//     data.innerHTML = charCount; // Show character count in charCount
// });
