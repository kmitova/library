let getTitle;
let getAuthor;
let getPages;
let readBook;
let checkboxYes;
let checkboxNo;
let card;
let inputAvailable = false;
// const cardsContainer = document.getElementsByClassName("cards");
// let bookCard = document.getElementsByClassName("card");
let myLibrary = [];
const cards = document.createElement("div");
cards.classList.add("cards");
let app = document.querySelector("body");
app.appendChild(cards);
// window.onload = generateCard();

const addBookBtn = document.getElementById("add-book"); // closes modal
console.log(addBookBtn)

const addBookModalBtn = document.getElementById('add-book-modal-btn'); // opens modal
const modalContainer = document.getElementById('modal-container')
console.log(addBookModalBtn)
addBookModalBtn.addEventListener('click', () => {
  modalContainer.classList.add('show')
  addBookModalBtn.classList.add('hide')
})

// addBookBtn.addEventListener("click", () => {
//   modalContainer.classList.remove("show");
// });


class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const harryPotter = new Book(
  "harry potter",
  "rowling",
  300,
  (read = "Not read")
);
myLibrary.push(harryPotter);

function generateCard() {
  console.log("generating...");
  cards.innerHTML = "";
  myLibrary.forEach(function (book, i) {
    console.log("in loop");
    card = document.createElement("div");
    // set card class
    card.classList.add("card");
    // set card id
    card.setAttribute("id", i);

    // write card inner html
    card.innerHTML = `<div class="card-content">
          <p class="book-title">${book.title}</p>
          <p class="book-author">${book.author}</p>
          <p class="book-pages">${book.pages} pages</p>
          <p id="change${i}" onclick='changeStatus(${i})' class="read-status">${book.read}</p>
          <button onclick="removeBook(${i})" class="remove-btn" id="${i}">Remove</button>
      </div>`;
    if (card) {
      console.log("there is a card");
    }
    // console.log(card.textContent);
    cards.appendChild(card);
    // console.log(cards.innerHTML);
  });
}
function changeStatus(ind) {
  console.log("in status function");
  let status = document.getElementById(`change${ind}`);
  // console.log(status.innerHTML);
  console.log(status.textContent);
  if (status.textContent === "Read") {
    console.log("current is read");
    status.textContent = "Not read";
  } else {
    status.textContent = "Read";
  }
  // console.log(status)
}

function removeBook(ind) {
  console.log(ind);
  myLibrary.splice(ind, 1);

  console.log(myLibrary);
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
  }
  checkboxNo = document.getElementById("not-read");
  if (checkboxNo.checked) {
    readBook = "Not read";
  }
  if (getTitle !== "" && getAuthor !== "" && getPages !== "") {
    inputAvailable = true;
  }

  // get value from checkbox ? https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
}

addBookBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  getInputValues();
  addBook();
  // generateCard();
  addBookModalBtn.classList.remove("hide");
});

function addBook() {
  console.log(inputAvailable)
  if (inputAvailable) {
      let newBook = new Book(getTitle, getAuthor, getPages, readBook);
  myLibrary.push(newBook);
  console.table(myLibrary);
  console.table(myLibrary);
  generateCard()
  }
  else {
    alert('fill in all fields')
  }

}

// function generateCards() {
//   myLibrary.forEach(book => {
//     let card = document.createElement('div')
//     card.innerHTML = "hi i'm a card"
//     cardsContainer.appendChild(card)
//     card.innerHTML += book
//   })
// }

// function generateCard() {
//   // cardsContainer.remove()
//   // cardsContainer.innerHTML = ''
//   for (let i = 0; i < myLibrary.length; i++) {
//     let fetch = document.querySelector(".cards").innerHTML;
//     cardsContainer.innerHTML = `<div id="${i}" class = "card">
//     <div class="card-content">
//         <p class="book-title">${myLibrary[i].title}</p>
//         <p class="book-author">${myLibrary[i].author}</p>
//         <p class="book-pages">${myLibrary[i].pages} pages</p>
//         <p class="read-status">Not yet read</p>
//       </div>
//     </div>` + fetch;
//   }
// }

// function generateCards() {
//   cardsContainer.innerHTML = "";
//   myLibrary.forEach((book, i) => {
//     console.log(book.title)
//     const card = `<div class="book-card" data-index=${i}>
//                             <div class="card-info-wrapper">
//                                 <h2>${book.title}</h2>
//                                 <h3>${book.author}</h3>
//                                 <h4>${book.pages} Pages</h4>
//                                 <p>read status</p>
//                                 <div class="button">
//                                         Remove
//                                 </div>
//                             </div>
//                         </div>`;
//     const element = document.createElement("div");
//     element.textContent = 'this is text'
//     // element.innerHTML = card;
//     // cardsContainer.appendChild(element.firstChild);
//     document.getElementsByClassName('cards').appendChild(element);
//   });
// }

// // try adding cards individually after each new add, assign an id and display next to the others in the cards class
// // put in the add book function????
// function addCard() {
//   // set id
//   cardsContainer.innerHTML = `html here`;
// }
