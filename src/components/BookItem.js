import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = (prop) => {
  const dispatch = useDispatch();
  const { book: { author, title }, id } = prop;

  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <span>
          {author}
        </span>
        <button type="button" onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default BookItem;
