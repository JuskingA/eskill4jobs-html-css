// promises are used to handle asynchronous operations
// promises are used to handle asynchronous operations
// promises are used to handle asynchronous operations  


const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});

// Using the Promise
myPromise
    .then((result) => {
        console.log(result); // Logs: "Operation successful!"
    })
    .catch((error) => {
        console.error(error); // If rejected, logs: "Operation failed."
    });
