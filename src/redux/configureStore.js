
import { combineReducers, configureStore } from 'redux';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;

