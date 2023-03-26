import React from 'react'; // Import the React library
import ReactDOM from 'react-dom'; // Import the ReactDOM library
import { createStore } from 'redux'; // Import the createStore function from the Redux library
import { Provider } from 'react-redux'; // Import the Provider component from the react-redux library

// Define the initial state of the Redux store
const initialState = { message: 'Hello, World!' };

// Define the reducer function that will update the state of the Redux store
function reducer(state = initialState, action) {
  switch (action.type) {
    // Handle any actions here (none in this case)
    default:
      return state;
  }
}

// Create the Redux store using the reducer function
const store = createStore(reducer);

// Define the root React component
function App() {
  // Render the current state of the Redux store (the "message" property)
  return (
    <div>
      <h1>{store.getState().message}</h1>
    </div>
  );
}

// Render the root React component inside a Provider component, which provides the Redux store to all child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
