import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addbook } from '../../redux/books/books';
import './BookForm.css';

const BookForm = () => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    genre: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevbook) => ({
      ...prevbook,
      id: uuid(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addbook(book));
    document.querySelector('.one').value = '';
    document.querySelector('.two').value = '';
  };

  return (
    <form>
      <h4>Add New Books</h4>
      <br />
      <div className="form-container">
        <label htmlFor="book-title">
          <input
            type="text"
            htmlFor="book-title"
            placeholder="book title"
            className="input one"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="book-author">
          <input
            type="text"
            htmlFor="book-book-author"
            placeholder="book authour"
            className="input two"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="categories">
          <select id="books categories" className="category">
            <option value={book.genre}>Categories</option>
            <option value={book.genre}>Fiction</option>
            <option value={book.genre}>Non-fiction</option>
            <option value={book.genre}>Self-Help</option>
            <option value={book.genre}>financial</option>
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
