import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define the initial state of the Redux store
const initialState = { num1: 0, num2: 0, sum: 0 };

// Define the reducer function that will update the state of the Redux store
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NUM1':
      return { ...state, num1: parseInt(action.payload), sum: state.num2 + parseInt(action.payload) };
    case 'SET_NUM2':
      return { ...state, num2: parseInt(action.payload), sum: state.num1 + parseInt(action.payload) };
    default:
      return state;
  }
}

// Create the Redux store using the reducer function
const store = createStore(reducer);

// Define the Calculator component
function Calculator(props) {
  // Define the event handlers for the "num1" and "num2" input fields
  const handleNum1Change = event => props.dispatch({ type: 'SET_NUM1', payload: event.target.value });
  const handleNum2Change = event => props.dispatch({ type: 'SET_NUM2', payload: event.target.value });

  // Render the input fields for "num1" and "num2", and the sum of the two numbers
  return (
    <div>
      <label htmlFor="num1">Number 1:</label>
      <input type="number" id="num1" value={props.num1} onChange={handleNum1Change} />
      <br />
      <label htmlFor="num2">Number 2:</label>
      <input type="number" id="num2" value={props.num2} onChange={handleNum2Change} />
      <br />
      <h1>Sum: {props.sum}</h1>
    </div>
  );
}

// Define the mapStateToProps function, which maps the state of the Redux store to props for the Calculator component
const mapStateToProps = state => {
  return {
    num1: state.num1,
    num2: state.num2,
    sum: state.sum
  };
}

// Connect the Calculator component to the Redux store using the connect function
const ConnectedCalculator = connect(mapStateToProps)(Calculator);

// Render the Calculator component inside a Provider component, which provides the Redux store to all child components
ReactDOM.render(
  <Provider store={store}>
    <ConnectedCalculator />
  </Provider>,
  document.getElementById('root')
);
