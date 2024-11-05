export const addBook = (name, price) => {
  return {
    type: 'ADD_BOOK',
    payload: { name, price }
  };
};

export const editBook = (index, name, price) => {
  return {
    type: 'EDIT_BOOK',
    payload: { index, name, price }
  };
};

export const deleteBook = (index) => {
  return {
    type: 'DELETE_BOOK',
    payload: index
  };
};
