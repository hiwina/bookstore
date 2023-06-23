import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <div>
      <ul>
        {bookItems.map(((book) => (
          <BookItem key={book.id} id={book.id} book={book} />
        )))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
