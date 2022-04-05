import { createStore, combineReducers } from 'redux';

import bookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const AllReducer = combineReducers({
  books: bookReducer,
  categories: CategoriesReducer,
});
export default createStore(AllReducer);
