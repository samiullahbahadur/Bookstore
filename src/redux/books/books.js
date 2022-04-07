
import Database from '../../Database/database';

const ADD_BOOK_REQUEST = 'bookstore/books/ADD_BOOK_REQUEST';
const ADD_BOOK_SUCCESS = 'bookstore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_FAIL = 'bookstore/books/ADD_BOOK_FAIL';

const GET_BOOKS_REQUEST = 'bookstore/books/GET_BOOKS_REQUEST';
const GET_BOOKS_SUCCESS = 'bookstore/books/GET_BOOKS_SUCCESS';
const GET_BOOKS_FAIL = 'bookstore/books/GET_BOOKS_FAIL';

const REMOVE_BOOK_REQUEST = 'bookstore/books/REMOVE_BOOK_REQUEST';
const REMOVE_BOOK_SUCCESS = 'bookstore/books/REMOVE_BOOK_SUCCESS';
const REMOVE_BOOK_FAIL = 'bookstore/books/REMOVE_BOOK_FAIL';

const intialState = {
  loading: false,
  booksArr: {},
  error: '',
};




export const addbook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
