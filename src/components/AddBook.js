import React from 'react';

const AddBook = () => (
  <div id="form-container">
    <h2>Add new book</h2>
    <form>
      <input type="text" placeholder="Book title..." />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Add Book </button>
    </form>
  </div>
);

export default AddBook;
