import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './AddBook';
import BookItem from './BookItem';
import { selectBooks } from '../redux/configureStore';
import { getBooks } from '../redux/books/booksSlice';

const Books = () => {
  const {
    bookItems, getStatus, postStatus, delStatus,
  } = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (getStatus.loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (getStatus.error) {
    return (
      <div>
        <h3>An error occurred:</h3>
        <pre>{getStatus.errMsg}</pre>
      </div>
    );
  }
  return (
    <div>
      <p>{postStatus.loading ? 'Posting...' : ''}</p>
      <p>{delStatus.loading ? 'Deleting...' : ''}</p>
      <pre>{postStatus.error ? postStatus.errMsg : ''}</pre>
      <pre>{delStatus.error ? delStatus.errMsg : ''}</pre>
      <ul>
        {bookItems.map((book) => (
          <BookItem key={book.id} id={book.id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
