// console.log('Hello World');
// console.log(5+10);
// console.log('Hello' + 'World');
// console.log('Hello' + 5);
// var x = 15;
// var y = 10;
// console.log(x + y);
// alert('connected');
// alert('Hello World');

// let a = 10;
// let b = 5;
// alert(a + b);

// let c = 'Jusking';
// let d = 'welcome';
// alert(c +' '+ d);

// let first_name = 'Jusking';
// const last_name = 'Adjei Nyarko';
// first_name = 'Kwame';
// console.log(first_name +' '+ last_name);



// const currentHour = new Date().getHours();
// let greeting;

// if (currentHour < 12) {
//     greeting = 'Good Morning';
// } else if (currentHour < 18) {
//     greeting = 'Good Day'; 
// } else {
//     greeting = 'Good Evening'; 
// }
// alert(greeting);

// $time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
// alert($time);


///Data types in JavaScript///
/*permitive data types
let x = 10;  // Number
let y = '10'; // String
let z = true; // Boolean
let a = null; // Null
let b = undefined; // Undefined
*/

// let c = {}; // Object
// let d = []; // Array

// operaters in JavaScript
// addtion
// let result = 5 + 10;

// subtraction
// result = 5 - 10;

// multiplcation
// result = 5 * 10;

// division
// result = 5 / 10;

// modulus
// result = 5 % 100;

// exponentiation
// result = 5 ** 10;

// increment
// result = 5 % 10;
// console.log(result);
// let kofi = 10;
// let Ama = 6;
// let yaa = 5.50;
// let total = kofi + Ama + yaa;
// console.log('the total is'+ ' ' + total);

// comparison operaters
// let x = 10;
// let y = 5;
// let result = x > y;
// console.log(result);

// result = x < y;
// console.log(result);

// result = x >= y;
// console.log(result);

// result = x <= y;    
// console.log(result);    

// result = x == y;
// console.log(result);

// result = x != y;    
// console.log(result);    

// result = x === y;  
// console.log(result);

// result = x !== y;
// console.log(result);

// logical operaters
/*let a = true;  
let b = false;
let c = true;
let d = false;
let result1 = a && b;
console.log(result1);

result1 = a || b;
console.log(result1);

result1 = !a;
console.log(result1);

result1 = !b;
console.log(result1);

result1 = !c;
console.log(result1);

result1 = !d;
console.log(result1);*/

//conditional statements
/*let age = 18;
if (age >= 18) {
    console.log('You are an adult');
} 
else {
    console.log('You are a minor');
}

// using the else if statement
let age1 = 15;
if (age1 >= 18) {
    console.log('You are an adult');
} 
else if (age1 >= 13) {
    console.log('You are a teenager');
} 
else {
    console.log('You are a minor');
}

// using the else if statement
let age2 = 25;
if (age2 >= 18) {
    console.log('You are an adult');
} 
else if (age2 >= 13) {
    console.log('You are a teenager');
} 
else {
    console.log('You are a minor');
}*/

// switch statement
/*let day = 2;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:        
        console.log('Invalid day');
}*/

// loops in JavaScript
// for loop
// for (let i = 0; i < 10; i++) {
//      console.log(i);
//  }

//  for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// while loop
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// do while loop
// let j = 0;
// do {    
//     console.log(j);
//     j++;
// } while (j < 10);

// // for in loop
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (let key in person) {
//     console.log(key, person[key]);
// } 

// // for of loop
// const fruits = ['apple', 'banana', 'orange'];
// for (let fruit of fruits) {
//     console.log(fruit);
// }
  
// functions in JavaScript
// function add(x, y) {
//     return x + y;
// }
// console.log(add(5, 10));        

// function greet(name) {
//     return 'Hello' + ' ' + name;
// }
// console.log(greet('John'));

// function multiplyNum(a, b){
//     console.log(a * b);
// }
// multiplyNum(5, 10);

// // function to calculate the area of a rectangle
// function calculateArea(width, height) {
//     return width * height;
// }
// console.log(calculateArea(2, 16));  

// // function to calculate the area of a circle 
// function calculateArea(radius) {
//     return Math.PI * radius**2;
// }
// console.log(calculateArea(5));

// // function to calculate the area of a triangle
// function calculateArea(base, height) {
//     return (base * height) / 2;
// }
// console.log(calculateArea(5, 10));

// // function to calculate the area of a square        
// function calculateArea(side) {
//     return side**2; 
// }               
// console.log(calculateArea(5));  

// // Arrays in JavaScript
//  let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);
// console.log(numbers[1]);    
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);

// let mixed = ['apple', 1, 'banana', 2, 'orange', 3];
// console.log(mixed[0]);
// console.log(mixed[1]);
// console.log(mixed[2]);    
// console.log(mixed[3]);    
// console.log(mixed[4]);
// console.log(mixed[5]); 

// // array methods
// let numbers1 = [1, 2, 3, 4, 5];
// numbers1.push('six'); // adds an element to the end of the array
// console.log(numbers1); 
// numbers1.pop(); // removes the last element from the array
// console.log(numbers1);
// numbers1.unshift('zero'); // adds an element to the beginning of the array
// console.log(numbers1);
// numbers1.shift(); // removes the first element from the array
// console.log(numbers1);

// iterating over an array
// // for loops
// let fruits1 = ['apple', 'banana', 'orange']; // array
// for (let i = 0; i < fruits1.length; i++) { // for loop to iterate over the array
//     console.log(fruits1[i]); // outputs each element of the array
// }

// // forEach loop
// let numbers2 = [1, 2, 3, 4, 5]; // array 
// numbers2.forEach(function(number) { // forEach loop to iterate over the array
//     console.log(number); // outputs each element of the array
// });

// map method
// let numbers3 = [1, 2, 3, 4, 5]; // array
// let doubledNumbers = numbers3.map(function(number) { // map method to double each element of the array
//     return number * 2; // returns the double of each element of the array
// });
// console.log(doubledNumbers);


// // create an array of student grades
// let grades = [80, 85, 90, 95, 100];

// //add new grade to the array
// grades.push(105);

// // update and existing grade at a specific index
// grades[2] = 95;

// // delete a grade by its index in the array
// grades.splice(3, 1);

// // log the index of a grade in the array into the console
// console.log(grades.indexOf(85));

// // log all the values in the array to the console
//  grades.forEach(function(grade) {
//     console.log(grade);
//  });

 //Object Oriented Programming in JavaScript
// create an object called person
let person = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '01-01-2000',
    age: 30,
    gender: 'male',
    Hobbies: ['reading', 'swimming', 'hiking'],
};

// access object properties
console.log(person); // outputs the entire object
console.log(person.firstName); // outputs the value of the firstName property
console.log(person.lastName); // outputs the value of the lastName property
console.log(person.dob); // outputs the value of the dob property
console.log(person.age); // outputs the value of the age property
console.log(person.gender); // outputs the value of the gender property
console.log(person.Hobbies); // outputs the value of the Hobbies property
console.log(person.Hobbies[0]); // outputs the first element of the Hobbies property


// object within an object
// create an object called person
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '01-01-2000',
    age: 30,
    gender: 'male',
    Hobbies: ['reading', 'swimming', 'hiking'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
    },
}

// access object properties
console.log(person1); // outputs the entire object  
console.log(person1.firstName); // outputs the value of the firstName property
console.log(person1.lastName); // outputs the value of the lastName property
console.log(person1.dob); // outputs the value of the dob property
console.log(person1.age); // outputs the value of the age property
console.log(person1.gender); // outputs the value of the gender property
console.log(person1.Hobbies); // outputs the value of the Hobbies property
console.log(person1.Hobbies[0]); // outputs the first element of the Hobbies property
console.log(person1.address); // outputs the value of the address property
console.log(person1.address.street); // outputs the value of the street property
console.log(person1.address.city); // outputs the value of the city property
console.log(person1.address.state); // outputs the value of the state property
console.log(person1.address.zip); // outputs the value of the zip property


// changing the value of an object property
person1.age = 31;