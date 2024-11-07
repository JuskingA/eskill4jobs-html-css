// console.dir(window.document); // window.document is the same as document
// console.dir(document); // document is the same as window.document
// console.dirxml(document); // displays the document object as an XML document
// console.log(document); // displays the document object as a JavaScript object
// console.log(document.body); // displays the body element
// console.log(document.head);     // displays the head element
// console.log(document.title);   // displays the title element
// console.log(document.URL);    // displays the URL of the document
// console.log(document.links); // displays the links in the document
// console.log(document.forms); // displays the forms in the document
// console.log(document.images); // displays the images in the document
// console.log(document.scripts); // displays the scripts in the document
// console.log(document.styleSheets); // displays the style sheets in the document
// console.log(document.documentElement); // displays the root element of the document
// console.log(document.doctype); // displays the document type declaration
// console.log(document.characterSet); // displays the character set of the document
// console.log(document.inputEncoding); // displays the input encoding of the document
// console.log(document.outputEncoding); // displays the output encoding of the document
// console.log(document.defaultCharset); // displays the default character set of the document
// console.log(document.compatMode); // displays the compatibility mode of the document
// console.log(document.contentType); // displays the content type of the document
// console.log(document.domain); // displays the domain of the document
// console.log(document.referrer); // displays the referrer of the document
// console.log(document.cookie); // displays the cookies of the document
// console.log(document.lastModified); // displays the last modified date of the document
// console.log(document.readyState); // displays the ready state of the document
// console.log(document.hidden); // displays the hidden state of the document
// console.log(document.visibilityState); // displays the visibility state of the document
// console.log(document.hasFocus()); // displays if the document has focus
// console.log(document.activeElement); // displays the active element in the document
// console.log(document.hasStorageAccess()); // displays if the document has storage access
// console.log(document.dir); // displays the direction of the document
// console.log(document.lang); // displays the language of the document
// console.log(document.body.dir); // displays the direction of the body element

// const h1 = document.getElementById('mainTitle'); // get the element with the id mainTitle
// console.log(h1); // display the element

// const buttons = document.getElementById('changeTitleButton'); // get the element with the id changeTitleButton
// console.log(buttons); // display the element

// const paragraphs = document.getElementsByClassName('paragraph'); // get the elements with the class paragraph
// console.log(paragraphs); // display the elements

// const divs = document.getElementsByTagName('div'); // get the elements with the tag div
// console.log(divs); // display the elements


// // Accessing content of an element
// const mainTitle = document.getElementById('mainTitle'); // get the element with the id mainTitle
// console.log(mainTitle.innerHTML); // display the content of the element
// console.log(mainTitle.innerText); // display the text content of the element
// console.log(mainTitle.textContent); // display the text content of the element

// const mainTitleText = mainTitle.innerHTML; // get the content of the element
// console.log(mainTitleText); // display the content of the element

// const mainTitleText2 = getElementById('mainTitle').innerHTML; // get the content of the element
// console.log(mainTitleText2); // display the content of the element


// const paragraph = document.getElementsByClassName('paragraph'); // get the elements with the class paragraph
// console.log(paragraph[1].innerText); // display the content of the first element

// manipulating the DOM
const mainTitle = document.getElementById('mainTitle'); // get the element with the id mainTitle
mainTitle.innerHTML = 'New Title'; // change the content of the element

const paragraph = document.getElementsByClassName('paragraph'); // get the elements with the class paragraph
paragraph[1].innerText = 'New content'; // change the content of the first element

const divs = document.getElementsByTagName('div'); // get the elements with the tag div
divs[0].innerHTML = 'New content'; // change the content of the first element

// creating new elements
const newParagraph = document.createElement('p'); // create a new paragraph element
newParagraph.innerText = 'New paragraph'; // set the text content of the paragraph
document.body.appendChild(newParagraph); // add the paragraph to the body
