// ACTIVITY 3:----------------------
// Manage a list of favorite books using an array and objects.
// Steps:
// Create an array books that contains objects. Each object should have title,  author, and yearPublished.
// Write a function addBook that takes a new book object and adds it to the  array.
// Write another function listBooks that loops through the array and prints  each book's details in the console.
// Add a few books and list them.

// create an array of books
let books = [
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        yearPublished: 1954,
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        yearPublished: 1960,
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        yearPublished: 1988,
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        yearPublished: 1925,
    }
];

// function to add a book to the list
function addBook(title, author, yearPublished) {
    books.push({
        title: title,
        author: author,
        yearPublished: yearPublished,
    });
}

// function to list the books in the list
function listBooks() {
    books.forEach(function(book) {
        console.log(book.title + ' by ' + book.author + ' (' + book.yearPublished + ')');
    });
}

// add some books to the list
addBook('The Catcher in the Rye', 'J.D. Salinger', 1951);
addBook('1984', 'George Orwell', 1949);
addBook('Pride and Prejudice', 'Jane Austen', 1813);

// list the books in the list
listBooks();