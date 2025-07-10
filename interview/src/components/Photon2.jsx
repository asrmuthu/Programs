import React, { useState } from 'react';

const Photon2 = () => {
  const formFields = [
    { label: 'Name', name: 'name' },
    { label: 'Age', name: 'age' },
  ];

  // State to store form input values
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: ''
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // State to store validation errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Validation function
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', age: '' };

    // Check if all fields are filled
    formFields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
        isValid = false;
      }
    });

    // Update errors state
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (validateForm()) {
      setSubmittedData(formData); // Save form data to submittedData state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
            {/* Display error message if any */}
            {errors[field.name] && (
              <span style={{ color: 'red', marginLeft: '10px' }}>
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {submittedData && <h2>Form submitted successfully!</h2>}
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          {formFields.map((field) => (
            <p key={field.name}>
              <strong>{field.label}:</strong> {submittedData[field.name]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photon2;
