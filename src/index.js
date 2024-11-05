import React from 'react';
import ReactDOM from 'react-dom';
import { store, BookApp } from './store';  // Named import 

ReactDOM.render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>,
  document.getElementById('root')
);
