// Relevent styling and funcionality
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  // Fetch Events
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/events');
      setEvents(response.data);
    } catch (error) {
      console.error('There was an eror fetching the events!', error);
    }
  };

  // Add event
  const addEvent = async (formData) => {
    try {
      await axios.post('http://localhost:3000/events', formData);
      fetchEvents();
      setShowForm(false);
    } catch (error) {
      console.error('There was an eror adding the event!', error);
    }
  };

  // Delete event
  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('There was an error deleting the event!', error);
    }
  };

  // Search FIlter for ordering elements
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.startdate) - new Date(b.startdate);
    } else {
      return new Date(b.startdate) - new Date(a.startdate);
    }
  });

  // Content to display on page
  return (
    <div className="app-container">
      <header>
        <h1>Event Manager</h1>
      </header>
      <section className="search-sort-section">
        <input
          type="text"
          placeholder="Search events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by date ({sortOrder})
        </button>
      </section>
      <section className="events-section">
        <EventList events={filteredEvents} onDelete={deleteEvent} />
      </section>
      <footer>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Add Event'}
        </button>
        {showForm && <EventForm onSubmit={addEvent} />}
      </footer>
    </div>
  );
}

export default App;
