import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define the initial state of the Redux store
const initialState = { count: 0 };

// Define the reducer function that will update the state of the Redux store
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

// Create the Redux store using the reducer function
const store = createStore(reducer);

// Define the Counter component
function Counter(props) {
  // Define the event handlers for the "increment" and "decrement" buttons
  const handleIncrement = () => props.dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => props.dispatch({ type: 'DECREMENT' });

  // Render the current count value and the "increment" and "decrement" buttons
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

// Define the mapStateToProps function, which maps the state of the Redux store to props for the Counter component
const mapStateToProps = state => {
  return {
    count: state.count
  };
}

// Connect the Counter component to the Redux store using the connect function
const ConnectedCounter = connect(mapStateToProps)(Counter);

// Render the Counter component inside a Provider component, which provides the Redux store to all child components
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  document.getElementById('root')
);
