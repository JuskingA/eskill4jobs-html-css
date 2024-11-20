/// creating functions
const doubleNumber = function (num1) { // doubleNumber function
    const result = 2*num1; // multiplying num1 by 2
    return result; // returning the result
}

//callback function
function sum (num3, callback) { // callback function
    const dNumber = callback(5);  // calling the doubleNumber function
    const finalResult = num3 + dNumber; // adding num3 and dNumber
    return finalResult; // returning the final result
}

const resultTwo = sum(20, doubleNumber); // calling the sum function
console.log(resultTwo); // printing the result


// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         console.log("Data fetched successfully!");
//         callback();
//     }, 2000); // Simulating 2-second delay
// }

// function processData() {
//     console.log("Processing data...");
// }

// fetchData(processData);


// callback function example greeting

// function greet(name, callback) { 
//     console.log(`Hello, ${name}`);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Jusking", sayGoodbye);


myFunction(function(err, result) {
    if (err) {
        console.error(err);
        return 'Error occurred in callback';
    } else {
        console.log(result);
        return 'I am callback';
    }
});

function myFunction(callback) {
    const result = callback(null, "Success!");
    console.log("Callback returned:", result);
}




