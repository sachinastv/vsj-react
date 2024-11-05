import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bookTicket, deleteTicket } from './actions';

const TicketBooking = ({ tickets, bookTicket, deleteTicket }) => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

  const handleBookTicket = () => {
    if (name && destination) {
      bookTicket({ name, destination });
      setName('');
      setDestination('');
    }
  };

  return (
    <div>
      <h2>Book a Ticket</h2>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Destination" 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)} 
      />
      <button onClick={handleBookTicket}>Book Ticket</button>

      <h2>Booked Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.name} - {ticket.destination}
            <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Map state and dispatch to props
const mapStateToProps = (state) => ({
  tickets: state.tickets
});

const mapDispatchToProps = {
  bookTicket,
  deleteTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);
