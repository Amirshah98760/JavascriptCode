let textInput = document.getElementById('textInput');
let btn = document.getElementById('btn');
let todo = document.getElementById('todo');

btn.addEventListener('click', ()=>{
   let something = document.createElement('li');
   todo.appendChild(something);
   something.innerHTML = textInput.value;
   localStorage.setItem('li', something);
   textInput.value = '';
   
});

localStorage.getItem('li', something)
