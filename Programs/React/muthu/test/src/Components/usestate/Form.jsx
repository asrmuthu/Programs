import React, { useState } from 'react';

function SimpleForm() {
  // Initial state to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',   // Stores gender
    termsAccepted: false,  // Stores if terms are accepted
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    termsAccepted: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,  // For checkboxes, update with checked value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,  // For other input types, update with value
      });
    }
  };

  // Validate the form fields before submission
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { ...errors };

    // Validate Name
    if (!formData.name) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    } else {
      newErrors.name = '';
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else {
      newErrors.email = '';
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = 'Password is required.';
      formIsValid = false;
    } else {
      newErrors.password = '';
    }

    // Validate Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required.';
      formIsValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      formIsValid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    // Validate Gender
    if (!formData.gender) {
      newErrors.gender = 'Gender is required.';
      formIsValid = false;
    } else {
      newErrors.gender = '';
    }

    // Validate Terms Acceptance
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions.';
      formIsValid = false;
    } else {
      newErrors.termsAccepted = '';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, submit the form data
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>

        {/* Gender Selection */}
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
        </div>

        {/* Checkbox for accepting terms */}
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          {errors.termsAccepted && <span style={{ color: 'red' }}>{errors.termsAccepted}</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
