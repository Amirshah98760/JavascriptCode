// let stdInfo = {
// fullName:'Yaseen khan',
// fatherName:'Sultan shah',
// age:25,
// class:439,
// rollNo:34
// };


// console.log(localStorage.setItem('fullName', stdInfo.fullName));
// console.log(localStorage.getItem('fullName'));
// console.log(sessionStorage.setItem('fullName', stdInfo.fullName));


// localStorage.setItem('fullName',stdInfo.fullName);

// console.log(localStorage.getItem('fullName'))
// localStorage.getItem('fullName')

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){   
//     let dataInput = document.getElementById('dataInput').value;
//     dataInput.value = '';  
//     localStorage.setItem('data', dataInput);
//     console.log(localStorage.getItem('data'))

// });

// let btn = document.getElementById('btn');


// btn.addEventListener('click', ()=>{
//     let dataInput = document.getElementById('dataInput');
//     localStorage.setItem('data', dataInput);
//    console.log(localStorage.getItem('data'));
// })

localStorage.setItem('name', 'Amir  Shah');
localStorage.setItem('fatherName', 'Sultan shah');
localStorage.setItem('age', 25);
localStorage.setItem('class', 439);
localStorage.setItem('rollNo', 34);



console.log('Name = ',localStorage.getItem('name'));
console.log('Father Name = ',localStorage.getItem('fatherName'));
console.log('Age = ',localStorage.getItem('age'));
console.log('Class = ',localStorage.getItem('class'));
console.log('Roll No = ',localStorage.getItem('rollNo'));



const stdData = {
    fullName:'Amir Shah',
    fatherName:'Sultan shah',
    age:25,
    class:439,
    rollNo:34
};


localStorage.setItem('stdData', JSON.stringify(stdData));

const getData = JSON.parse(localStorage.getItem('stdData'));
console.log(getData);
console.log(getData.fullName);
console.log(getData.fatherName);
console.log(getData.age);
console.log(getData.class);
console.log(getData.rollNo);

// const items = {
//     itemName: 'glass',
//     id:'1',
//     price:200,
//     description:'Standard'
// };

// localStorage.setItem('items', JSON.stringify(items));
// const getItems = JSON.parse(localStorage.getItem('items'));
// console.log(getItems);
// console.log(getItems.itemName);



// how to store form data in Object

let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    form.reset();
    let formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(data));
});
let getFormData = JSON.parse(localStorage.getItem('formData'));
console.log(getFormData); // doesn't work

console.log(getFormData.name);
console.log(getFormData.password);
console.log(getFormData.email); 