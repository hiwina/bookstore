import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';

const BookItem = (prop) => {
  const dispatch = useDispatch();
  const { book: { author, title, category }, id } = prop;

  const handleDelete = () => {
    dispatch(delBook(id));
  };
  return (
    <div>
      <li>
        <h3>{title}</h3>
        <span>
          {author}
        </span>
        <p>{category}</p>
        <button type="button" onClick={handleDelete}>
          Delete

        </button>
      </li>
    </div>
  );
};

export default BookItem;
