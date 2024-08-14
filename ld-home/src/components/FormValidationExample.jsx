import React, { useState } from 'react';

const FormValidationExample = () => {
  // State variables for form fields and validation errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      console.log('Form submitted successfully!');
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  // Function to validate form fields
  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
