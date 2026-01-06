const myPromise = new Promise((resolve, reject) => {
 const success = true; // change to false to test reject
 if (success) {
 resolve("Data received successfully!");
 } else {
 reject("Something went wrong!");
 }
 });
 myPromise
 .then((message) => console.log(message)) // runs if resolved
 .catch((error) => console.error(error))  // runs if rejected
 .finally(() => console.log("Promise completed!"));


 new Promise((resolve) => {
 setTimeout(() => resolve(10), 1000);
 })
 .then((num) => {
 console.log(num); // 10
 return num * 2;
 })
 .then((result) => {
 console.log(result); // 20
 });


let demo = document.getElementById("demo");
let showId = document.getElementById("showId");
let showBody = document.getElementById("showBody");

 fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => response.json()) // convert to JSON
 .then((data) => {
   console.log(data);
   showBody.innerHTML = `Post Body: ${data.body}`;
   showId.innerHTML = `Post ID: ${data.id}`;
   demo.innerHTML = `<h2>${data.title}</h2>`;
 })
 .catch((error) => console.error("Error fetching data:", error));


//   Task 1 — Simple Promise
let simplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded successfully!");
  }, 3000);
});

simplePromise.then((message) => {
  console.log(message);
});



//  • Task 2 —Promise Rejection

let randomPromise = new Promise((resolve, reject) => {
  let success = Math.random() < 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

randomPromise
  .then((message) => console.log(message))
  .catch((error) => console.error(error));


//  • Task 3 — Fetching Data
   fetch("https://jsonplaceholder.typicode.com/posts")
 .then((response) => response.json())
 .then((posts) => {
 posts.slice(0, 5).forEach((post) => {
 console.log(post.title);
 });
 });


// Task 4 — Async/Await
  async function getPosts() {
 const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 const data = await response.json();
 const list = document.getElementById("posts");
 data.slice(0, 5).forEach(post => {
 const li = document.createElement("li");
 li.textContent = post.title;
 list.appendChild(li);
 });
 }
 getPosts();