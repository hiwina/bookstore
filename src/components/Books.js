import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const data = [];

const Books = () => (
  <div>
    <ul>
      {data.map(((book) => (
        <BookItem key={book.id} title={book.title} author={book.author} />
      )))}
    </ul>
    <AddBook />
  </div>
);

export default Books;
