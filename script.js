// VARIABLES
let readBook;
let checkboxYes;
let checkboxNo;
let card;
let status;
let inputAvailable = false;
let getTitle = document.getElementById("titleInput");
let getAuthor = document.getElementById("authorInput");
let getPages = Number(document.getElementById("pagesInput"));
let myLibrary = [];

const booksContainer = document.querySelector(".books-container");
const cards = document.createElement("div");
const addBookBtn = document.getElementById("add-book");
const addBookModalBtn = document.getElementById("add-book-modal-btn");
const modalContainer = document.getElementById("modal-container");

// BOOK CONSTRUCTOR
class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// CARDS CONTAINER
cards.classList.add("cards");
booksContainer.appendChild(cards);

// EVENTS
addBookModalBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

addBookBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  getInputValues();
  addBook();
});

// FUNCTIONS
function generateCard() {
  cards.innerHTML = "";
  myLibrary.forEach(function (book, i) {
    card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", i);
    card.innerHTML = `<div class="card-content">
          <p class="book-title">${book.title}</p>
          <p class="book-author">${book.author}</p>
          <p class="book-pages">${book.pages} pages</p>
          <p id="change${i}" onclick='changeStatus(${i})' class="read-status">${book.read}</p>
          <button onclick="removeBook(${i})" class="remove-btn" id="${i}">Remove</button>
      </div>`;
    cards.appendChild(card);
    if (book.read == "Read") {
      console.log("book is read");
      document.getElementById(`change${i}`).style.backgroundColor = "green";
    } else {
      console.log("book not read");
      document.getElementById(`change${i}`).style.backgroundColor = "red";
    }
  });
}

function changeStatus(ind) {
  let status = document.getElementById(`change${ind}`);
  if (status.textContent === "Read") {
    status.textContent = "Not read";
    status.style.backgroundColor = "red";
  } else {
    status.textContent = "Read";
    status.style.backgroundColor = "green";
  }
}

function removeBook(ind) {
  myLibrary.splice(ind, 1);
  cards.removeChild(card);
  generateCard();
}

function getInputValues() {
  getTitle = document.getElementById("titleInput").value;
  getAuthor = document.getElementById("authorInput").value;
  getPages = Number(document.getElementById("pagesInput").value);
  checkboxYes = document.getElementById("read-already");
  if (checkboxYes.checked) {
    readBook = "Read";
    checkboxYes.checked = false;
  } else {
    readBook = "Not read";
  }
  if (getTitle !== "" && getAuthor !== "" && getPages !== "") {
    inputAvailable = true;
  }
}

function addBook() {
  console.log(inputAvailable);
  if (inputAvailable) {
    let newBook = new Book(getTitle, getAuthor, getPages, readBook);
    myLibrary.unshift(newBook);
    generateCard();
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pagesInput").value = "";
    inputAvailable = false;
  } else {
    alert("fill in all fields");
  }
}
