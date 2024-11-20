//console.log('Jusking Adjei Nyarko');

// using the require function to import the fullName module
const fullName = require('./fullname'); // Importing the fullName module
console.log(fullName); // Output: Jusking Adjei Nyarko  // Importing the fullName module

// // using the require function to import the calculateArea module
// const calculateArea = require('./modules'); // Importing the calculateArea module
// console.log(calculateArea(2, 16)); // Output: 32

// // using the require function to import the add module
// const add = require('./modules'); // Importing the add module
// console.log(add(2, 15)); // Output: 17

// // Accessing the calculateArea module
// const { calculateArea } = module.calculateArea(2, 12); // Importing the calculateArea module
// console.log(calculateArea); // Output: 32

// // Accessing the add module
// const { sum } = module.sum(6, 13); // Importing the add module
// console.log(sum); // Output: 17

const fs = require('fs'); // Importing the fs module
const validator = require('validator'); // Importing the validator module
validator.isEmail('foo@bar.com');   //=> true
const isEmail = validator.isEmail('Jusking@gmail.com');  // Validating an email address
console.log(isEmail); // Output: true