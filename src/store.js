import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bookReducer from './bookReducer';
import BookComponent from './BookComponent';

const store = createStore(bookReducer);

export const BookApp = () => (
  <Provider store={store}>
    <BookComponent />
  </Provider>
);
