let taskInput = document.getElementById("taskInput");
let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    let task = taskInput.value;
    console.log(task);  
    taskInput.value = "";
    let li = document.createElement("li");
    li.textContent = task;
    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);
     let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    // Save data in localStorage
 localStorage.setItem("tasks", task);

 const user = localStorage.getItem("tasks");
 console.log(user); 
            
});
   
