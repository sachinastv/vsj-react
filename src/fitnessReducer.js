import { INCREMENT_REPS, DECREMENT_REPS, BONUS_INCREMENT_REPS, RESET_REPS } from './actions';

const initialState = {
  exercises: {
    pushUps: 0,
    squats: 0,
    jumpingJacks: 0
  }
};

const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REPS:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload]: state.exercises[action.payload] + 1
        }
      };
    case DECREMENT_REPS:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload]: state.exercises[action.payload] > 0 ? state.exercises[action.payload] - 1 : 0
        }
      };
    case BONUS_INCREMENT_REPS:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload]: state.exercises[action.payload] + 2
        }
      };
    case RESET_REPS:
      return {
        ...state,
        exercises: {
          ...state.exercises,
          [action.payload]: 0
        }
      };
    default:
      return state;
  }
};

export default fitnessReducer;
