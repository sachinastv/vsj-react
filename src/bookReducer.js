const initialState = {
    books: []
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BOOK':
        return {
          ...state,
          books: [...state.books, action.payload]
        };
      case 'EDIT_BOOK':
        return {
          ...state,
          books: state.books.map((book, index) =>
            index === action.payload.index
              ? { ...book, name: action.payload.name, price: action.payload.price }
              : book
          )
        };
      case 'DELETE_BOOK':
        return {
          ...state,
          books: state.books.filter((_, index) => index !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  