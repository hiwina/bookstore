import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addNewBook = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(addBook({ book: { id: uuid(), title, author } }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <>
      <h2>Add new book</h2>
      <form onSubmit={addNewBook}>
        <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add </button>
      </form>
    </>
  );
};

export default AddBook;
