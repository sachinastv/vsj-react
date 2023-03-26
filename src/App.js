import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';

const App = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
