// let myName  = 'Kifayat khan'; 

let stdName = ['kifayat', 'amir' , 'talha','aziz', 'bilal']; //Array
//Array  slice Method
console.log(stdName.slice(0, 3));
console.log(stdName)

// Array toSpliced method 
console.log(stdName.toSpliced(0,1,'huzaifa'));
console.log(stdName)

// Array splice method 
// console.log(stdName.splice(0,1,'madam'));
// console.log(stdName)

let alpha = ['a', 'b', 'c'];

console.log(stdName.concat(alpha));
console.log(stdName.join(' '))

console.log(stdName)

stdName.pop();  
console.log(stdName)

stdName.push('aziz ullah');
console.log(stdName);
stdName.shift()
console.log(stdName)

stdName.unshift('kifayat');
console.log(stdName)


console.log(stdName);
console.log(stdName[0]);
console.log(stdName[1]);
console.log(stdName[2]);

for (let i = 0; i<stdName.length; i++){
console.log(stdName[i])
}
    

let newStdName = new Array('amir ', 'kifayat','talha');

let arr2 = [1,2,5,6,9,3,1];

console.log(arr2.sort());

// Array  toString method 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let myList = fruits.toString();
console.log(myList)