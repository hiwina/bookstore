import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const data = [
  {
    id: 1,
    title: 'Book1',
    author: 'Author1',
  },
  {
    id: 2,
    title: 'Book2',
    author: 'Author2',
  },
];

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
