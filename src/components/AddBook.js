import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ title: '', author: '', category: '' });

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      dispatch(postBook({ item_id: uuid(), ...book }));
      setBook({ title: '', author: '', category: '' });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>Add new book</h2>
      <form onSubmit={addNewBook}>
        <input type="text" placeholder="Enter Book Title" name="title" value={book.title} onChange={handleChange} />
        <input type="text" placeholder="Enter Book Author" name="author" value={book.author} onChange={handleChange} />
        <input type="text" placeholder="Enter Book Category" name="category" value={book.category} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddBook;
