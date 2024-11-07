// creating elements for JavaScript

const header = document.getElementById('header'); // get header element

const list = document.getElementById('list');   // get list element

const table = document.getElementById('table'); // get table element

// create header element
const h1 = document.createElement('h1'); // create h1 element
h1.innerText = 'List of Books'; // add text to h1 element
header.appendChild(h1); // append h1 element to header

// crating  paregraph and button in the div element with id header
const div = document.createElement('div'); // create div element
const p = document.createElement('p'); // create p element
p.innerText = 'This is a new Paragraph'; // add text to p element
div.appendChild(p); // append p element to div

const button = document.createElement('button'); // create button element
button.innerText = 'Click me'; // add text to button element
div.appendChild(button); // append button element to div
header.appendChild(div); // append div element to header

// create list element
const ul = document.createElement('ul'); // create ul element
const li1 = document.createElement('li'); // create li element
li1.innerText = 'Book 1'; // add text to li element
ul.appendChild(li1); // append li element to ul
const li2 = document.createElement('li'); // create li element
li2.innerText = 'Book 2'; // add text to li element
ul.appendChild(li2); // append li element to ul
const li3 = document.createElement('li'); // create li element
li3.innerText = 'Book 3'; // add text to li element
ul.appendChild(li3); // append li element to ul
list.appendChild(ul); // append ul element to list

// create table element
const tableElement = document.createElement('table'); // create table element
const tr1 = document.createElement('tr'); // create tr element
const th1 = document.createElement('th'); // create th element
th1.innerText = 'Name'; // add text to th element
tr1.appendChild(th1); // append th element to tr
const th2 = document.createElement('th'); // create th element
th2.innerText = 'Author'; // add text to th element
tr1.appendChild(th2); // append th element to tr
tableElement.appendChild(tr1); // append tr element to table
const tr2 = document.createElement('tr'); // create tr element
const td1 = document.createElement('td'); // create td element
td1.innerText = 'The Lord of the Rings'; // add text to td element
tr2.appendChild(td1); // append td element to tr
const td2 = document.createElement('td'); // create td element
td2.innerText = 'J.R.R. Tolkien'; // add text to td element
tr2.appendChild(td2); // append td element to tr
tableElement.appendChild(tr2); // append tr element to table
table.appendChild(tableElement); // append table element to table

// event listener for button
document.getElementById('clickbtn').addEventListener('click', () => {
    alert('Button clicked');
    });

    document.getElementById('clickbtn').addEventListener('click', () => {
        print('Button clicked');
        });

        document.getElementById('clickbtn').addEventListener('click', () => {
            prompt('Button clicked');
            });

// event listener for link
document.getElementById('link').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Link clicked');
    });

    document.getElementById('link').addEventListener('click', (event) => {
        event.preventDefault();
        print('Link clicked');
        });

        document.getElementById('link').addEventListener('click', (event) => {
            event.preventDefault();
            prompt('Link clicked');
            });

// event listener for input
document.getElementById('input').addEventListener('input', (event) => {
    alert('Input changed');
    });

    document.getElementById('input').addEventListener('change', (event) => {
        print('Input changed');
        });

        document.getElementById('input').addEventListener('change', (event) => {
            prompt('Input changed');
            });

// event listener for select
