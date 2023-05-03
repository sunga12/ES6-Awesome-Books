import BookList from './modules/booklist.js';
import { DateTime } from './modules/luxon.js';

const list = document.getElementById('list');
const addNew = document.querySelector('.a-n');
const conTact = document.getElementById('contact-link');

const listOfBooks = document.querySelector('.book-list');
const addANewBook = document.querySelector('.add-new');
const contactSection = document.querySelector('.contact');

list.addEventListener('click', () => {
  addANewBook.style.display = 'none';
  listOfBooks.style.display = 'block';
  contactSection.style.display = 'none';
});

addNew.addEventListener('click', () => {
  addANewBook.style.display = 'block';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'none';
});

conTact.addEventListener('click', () => {
  addANewBook.style.display = 'none';
  listOfBooks.style.display = 'none';
  contactSection.style.display = 'block';
});

const date = document.querySelector('.date');
const dateNdTime = DateTime.now().toISO();
date.textContent = dateNdTime;

/* eslint-disable */
const freshBook = new BookList();

freshBook.form.addEventListener('submit', (e) => {
  e.preventDefault();
  freshBook.addBook("title", "author");
});


/* compare and remove */
freshBook.bookBtns.forEach((bookBtn) => {
  bookBtn.addEventListener('click', (e) => {
    const buttonId = parseInt(e.target.getAttribute('id'), 10);
    freshBook.remove(buttonId);
  });
});