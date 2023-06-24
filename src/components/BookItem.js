import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/booksSlice';
import { getDummyProgress, getDummyChapter } from '../dummies';

const BookItem = (prop) => {
  const dispatch = useDispatch();
  const { book: { author, title, category }, id } = prop;

  const handleDelete = () => {
    dispatch(delBook(id));
  };
  return (
    <li>
      <div className="book">
        <div className="d-flex details">
          <p className="current-chapter">{category}</p>
          <h3 className="title">{title}</h3>
          <span>
            {author}
          </span>
          <div>
            <button type="button" onClick={() => { }} className="btn-single">
              Comment
            </button>
            <button type="button" onClick={handleDelete} className="btn-single">
              Remove
            </button>

            <button type="button" onClick={() => { }} className="btn-single">
              Edit
            </button>
          </div>
        </div>
        <p className="d-flex-start g-5">
          <div className="circle">
            <CircularProgressbar
              strokeWidth={5}
              value={getDummyProgress()}
            />
            {' '}

          </div>
          <div>
            <h3>
              {' '}
              {getDummyProgress()}
              %
              {' '}
              <br />
              <div className="completed">completed</div>
            </h3>
          </div>

        </p>
        <div className="d-flex chapter-details">
          <h5 className="current-chapter">Current Chapter</h5>
          <p>{getDummyChapter()}</p>
          <button type="button" className="progress-btn">Update Progress</button>
        </div>

      </div>
    </li>
  );
};

export default BookItem;
