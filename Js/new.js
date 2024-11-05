// Weather Advisor Program

// Prompt the user to enter the current temperature in Celsius
let temperature = parseFloat(prompt("Enter the current temperature in Celsius:"));

// Determine the appropriate message based on the temperature range
if (temperature > 30) {
    console.log("It's a hot day! Stay hydrated.");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a nice day! Enjoy the weather.");
} else if (temperature >= 10 && temperature <= 19) {
    console.log("It's a bit chilly. Consider a jacket.");
} else {
    console.log("It's cold outside! Dress warmly.");
}