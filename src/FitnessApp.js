import React from 'react';
import { connect } from 'react-redux';
import { incrementReps, decrementReps, bonusIncrementReps, resetReps } from './actions';

const FitnessApp = ({ exercises, incrementReps, decrementReps, bonusIncrementReps, resetReps }) => {
  return (
    <div>
      <h1>Fitness App</h1>

      {Object.keys(exercises).map(exercise => (
        <div key={exercise} style={{ marginBottom: '20px' }}>
          <h2>{exercise}</h2>
          <p>Reps: {exercises[exercise]}</p>
          <button onClick={() => incrementReps(exercise)}>Add Rep</button>
          <button onClick={() => decrementReps(exercise)}>Remove Rep</button>
          <button onClick={() => bonusIncrementReps(exercise)}>Bonus Reps (+2)</button>
          <button onClick={() => resetReps(exercise)}>Reset</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  exercises: state.exercises
});

const mapDispatchToProps = {
  incrementReps,
  decrementReps,
  bonusIncrementReps,
  resetReps
};

export default connect(mapStateToProps, mapDispatchToProps)(FitnessApp);
