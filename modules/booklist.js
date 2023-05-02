import Book from './book.js';

export default class BookList {
  form = document.querySelector('.form');

  bookBtns = document.querySelectorAll('.remove');

  constructor() {
    this.newBooks = document.querySelector('.books');
    this.storage = JSON.parse(window.localStorage.getItem('allBooks')) || [];
    this.allBooks = this.storage;

    this.storage.forEach((book, index) => {
      const displayBook = `
      <div class="book-container">
      <div class="title-author">
      <p class="book">"${book.title}" by ${book.author} </p>
      </div>
        <button class="remove" id=${index}>Remove</button>
      </div>
      `;
      this.newBooks.insertAdjacentHTML('beforeend', displayBook);
    });

    this.bookBtns = document.querySelectorAll('.remove');
  }

  // function to compare incoming and existing book
  bookExist = (existingTitle,
    newTitle) => JSON.stringify(existingTitle) === JSON.stringify(newTitle);

  // add book
  addBook() {
    const newBook = new Book(document.getElementById('title').value, document.getElementById('author').value);
    // check if book exists
    let exist = false;
    this.allBooks.forEach((book) => {
      if (this.bookExist(book.title, newBook.title)) {
        exist = true;
      }
    });

    /* add book if it doesn't exist already */
    if (!exist) {
      this.allBooks.unshift(newBook);
      window.localStorage.setItem('allBooks', JSON.stringify(this.storage));
      window.location.reload();
    }
  }

  /* remove book */
  remove(buttonId) {
    this.allBooks = this.allBooks.filter((book, index) => index !== buttonId);
    window.localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
    window.location.reload();
  }
}
