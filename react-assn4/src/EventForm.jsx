// Relevent styling and funcionality
import React, { useState } from 'react';
import './EventForm.css'; 

// Form to send to DB
function EventForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', description: '', startdate: '', enddate: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
    setForm({ name: '', description: '', startdate: '', enddate: '' });
    setErrors({});
  };

  // Error checking
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter an event name.';
    }
    if (!formData.description.trim()) {
      errors.description = 'Please enter a description.';
    }
    return errors;
  };

  // Content to return to page
  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className={errors.name ? 'input-error' : ''}
          type="text"
          placeholder="Event name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>
      <div className="form-group">
        <input
          className={errors.description ? 'input-error' : ''}
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        {errors.description && <p className="error-msg">{errors.description}</p>}
      </div>
      <div className="form-group">
        <label>Start Date:</label>
        <input
          type="date"
          value={form.startdate}
          onChange={(e) => setForm({ ...form, startdate: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>End Date:</label>
        <input
          type="date"
          value={form.enddate}
          onChange={(e) => setForm({ ...form, enddate: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm;
