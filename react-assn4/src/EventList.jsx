// Relevent styling and funcionality
import React from 'react';
import './EventList.css'; 

// Event items retrieved from the DB
function EventList({ events, onDelete }) {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.id} className="event-item">
          <div>
            <h3>{event.name}</h3>
            <p>
              {new Date(event.startdate).toLocaleDateString()} to {new Date(event.enddate).toLocaleDateString()}
            </p>
          </div>
          <button onClick={() => onDelete(event.id)}>Delete</button> 
        </li>
      ))}
    </ul>
  );
}

export default EventList;
