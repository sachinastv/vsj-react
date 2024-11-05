import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook, deleteBook } from './actions';

const BookComponent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      if (editIndex !== null) {
        dispatch(editBook(editIndex, name, price));
        setEditIndex(null);
      } else {
        dispatch(addBook(name, price));
      }
      setName('');
      setPrice('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setName(books[index].name);
    setPrice(books[index].price);
  };

  const handleDelete = (index) => {
    dispatch(deleteBook(index));
  };

  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Book Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">{editIndex !== null ? 'Update Book' : 'Add Book'}</button>
      </form>

      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.name} - ₹{book.price}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookComponent;
