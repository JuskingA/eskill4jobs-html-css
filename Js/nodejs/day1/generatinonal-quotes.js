/// Import the inspirational-quotes package
const quotes = require('inspirational-quotes');

// Store unique quotes in an array
const usedQuotes = new Set();

// Function to generate and display a unique quote
function generateUniqueQuote() {
    let quote;

    do {
        quote = quotes.getQuote(); // Fetch a random quote
    } while (usedQuotes.has(quote.text)); // Check if it's already used

    // Add the new quote to the set of used quotes
    usedQuotes.add(quote.text);

    // Display the quote
    console.log(`\n"${quote.text}"\n- ${quote.author || "Unknown"}\n`);

    // Reset if all possible quotes have been used
    if (usedQuotes.size > 1000) { // Adjust this if needed based on the quote dataset
        console.log("All quotes have been displayed. Restarting...");
        usedQuotes.clear();
    }
}

// Generate the first quote immediately
generateUniqueQuote();

// Set an interval to generate a new quote every 10 seconds
setInterval(generateUniqueQuote, 1000);
