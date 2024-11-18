const calculateArea = function(height, width) { // Defining the calculateArea module
  const area = height * width; // Calculating the area of a rectangle
    return area; // Returning the area of a rectangle
}

//module.exports = calculateArea  // Exporting the calculateArea module

// adding 2 numbers
const sum = function(a, b) {
  return a + b;
}
//module.exports = add;

// exporting multiple modules
module.exports = {
  calculateArea,
  sum
}