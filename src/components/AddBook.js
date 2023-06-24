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
    <div className="hr">
      <h3 className="add-book">Add a new book:</h3>
      <form onSubmit={addNewBook} className="container-center">
        <div>
          <input type="text" placeholder="Enter Book Title" name="title" value={book.title} onChange={handleChange} className="input-control" />
        </div>
        <div>
          <input type="text" placeholder="Enter Book Author" name="author" value={book.author} onChange={handleChange} className="input-control" />
        </div>
        <div>
          <select
            className="select"
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            <option value="action">Action</option>
            <option value="science fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
