import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title, author }) => (
  <div>
    <li>
      <h3>{title}</h3>
      <span>
        {author}
      </span>
      <button type="button">Delete</button>
    </li>
  </div>
);

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

BookItem.defaultProps = {
  title: '',
  author: '',
};

export default BookItem;
