let getTitle;
let getAuthor;
let getPages;
let readBook
let checkboxYes
let checkboxNo
const addBookBtn = document.getElementById("add-book");
const booksContainer = document.getElementById('books-container')
let myLibrary = [];

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const harryPotter = new Book("harry potter", "rowling", 300, (read = false));
console.log(harryPotter.read);
console.log(harryPotter.author);
console.log(harryPotter.pages);
myLibrary.push(harryPotter);

// let getTitle = document.getElementById('titleInput').value
// console.log(getTitle)

function getInputValues() {
  getTitle = document.getElementById("titleInput").value;
  getAuthor = document.getElementById("authorInput").value;
  getPages = Number(document.getElementById("pagesInput").value);
  checkboxYes = document.getElementById('read-already')
  if (checkboxYes.checked) {
    readBook = true
  }
  checkboxNo = document.getElementById("not-read");
  if (checkboxNo.checked) {
    readBook = false;
  } 

  // get value from checkbox ? https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
}
// let getTitle = document.getElementById("titleInput");
// let getTitle = document.getElementById("titleInput");

addBookBtn.addEventListener("click", () => {
  getInputValues();
  console.log(getTitle);
  console.log(readBook)
  addBook()
  generateCard()
  // myLibrary.push(getTitle)
  // add the input values to their own instance of the book object
});

function addBook() {
  let newBook = new Book(getTitle, getAuthor, getPages, readBook)
  myLibrary.push(newBook)
  console.table(myLibrary)
}

function generateCard() {
  // booksContainer.textContent = myLibrary.join(' ')
  for (let item of myLibrary) {
    booksContainer.textContent += item.title
    booksContainer.textContent += item.author;
    booksContainer.textContent += item.pages;
    booksContainer.textContent += item.read;
    // console.log(item.title)
  }
}
