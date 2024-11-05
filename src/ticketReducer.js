import { BOOK_TICKET, DELETE_TICKET } from './actions';

const initialState = {
  tickets: []
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, { ...action.payload, id: Date.now() }] // Add new ticket with unique ID
      };
    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket.id !== action.payload) // Remove ticket by ID
      };
    default:
      return state;
  }
};

export default ticketReducer;
